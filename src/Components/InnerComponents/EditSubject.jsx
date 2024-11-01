import React, { useState, useEffect } from "react";

const EditSubject = ({ subjects, setSubjects, index }) => {
  const [hidden, setHidden] = useState(true);
  const [subject, setSubject] = useState(null);
  const [subjectData, setSubjectData] = useState({
    name: "",
    credits: "",
    ccaMarks: "",
    endSemMarks: "",
    id: "",
  });

  useEffect(() => {
    // Update subjectData when subject changes
    setSubjectData(
      subject || {
        name: "",
        credits: "",
        ccaMarks: "",
        endSemMarks: "",
        id: "",
      },
    );
  }, [subject]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSubjectData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let updatedTotalCredits = 0;
    let updatedTotalCreditsXGradePoints = 0;
    if (subject) {
      const updatedSubjects = subjects.map((old) =>
        old.id === index ? subjectData : old,
      );
      updatedSubjects.forEach((subject) => {
        subject.totalOutOf100 =
          Number(subject.endSemMarks) + Number(subject.ccaMarks);
        subject.gradePoints = gradePoints(subject.totalOutOf100);
        subject.creditsXGradePoints = subject.credits * subject.gradePoints;

        updatedTotalCredits += Number(subject.credits);
        updatedTotalCreditsXGradePoints += subject.creditsXGradePoints;
      });
      updatedSubjects.forEach((subject) => {
        subject.totalCredits = updatedTotalCredits;
        subject.totalCreditsXGradePoints = updatedTotalCreditsXGradePoints;
      });
      setSubjects(updatedSubjects);

      localStorage.setItem("subjects", JSON.stringify(updatedSubjects));
      setHidden(true);
    }
  };
  const gradePoints = (marks) => {
    let grade = "";
    if (marks >= 91 && marks <= 100) {
      grade = 10;
    } else if (marks >= 81 && marks <= 90) {
      grade = 9;
    } else if (marks >= 71 && marks <= 80) {
      grade = 8;
    } else if (marks >= 61 && marks <= 70) {
      grade = 7;
    } else if (marks >= 51 && marks <= 60) {
      grade = 6;
    } else if (marks >= 46 && marks <= 50) {
      // Add more conditions if needed
      grade = 5 /* Corresponding grade */;
    } else {
      // Handle other cases if needed
      grade = 4;
    }
    return grade;
  };
  const findItem = (index) => {
    const subjectData = subjects.find((subject) => subject.id === index);
    if (subjectData) {
      setSubject(subjectData);
      setHidden(false);
    } else {
      console.error(`Subject with id ${index} not found.`);
    }
  };

  return (
    <>
      {/* Modal toggle */}
      <div className="flex justify-center m-5">
        <button
          className="block text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-xs md:text-sm md:px-5 md:py-2.5 px-3 py-2 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          type="button"
          onClick={() => {
            setHidden(!hidden);
            findItem(index);
          }}
        >
          Edit
        </button>
      </div>
      {/* Main modal */}
      <div
        tabIndex={-1}
        hidden={hidden}
        className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full h-full md:h-full backdrop-blur-sm"
      >
        <div className="flex flex-row items-center justify-center">
          <div className="relative flex items-center justify-center p-4 w-full max-w-2xl h-full">
            {/* Modal content */}
            <div className="relative p-4 bg-white rounded-lg shadow dark:bg-darkElevate sm:p-5">
              {/* Modal header */}
              <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Edit Subject Data
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-toggle="defaultModal"
                  onClick={() => setHidden(!hidden)}
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              {/* Modal body */}

              <form onSubmit={handleSubmit}>
                <div className="grid gap-4 mb-4 sm:grid-cols-2">
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={subjectData.name}
                      onChange={handleChange}
                      className="shadow-sm bg-[#F2F2F2]  text-zinc-900 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 dark:bg-darkNav/80 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-slate-500 dark:focus:border-slate-500 dark:shadow-sm-light dark:text-slate-200"
                      placeholder="Subject Name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Credits
                    </label>
                    <input
                      type="text"
                      name="credits"
                      value={subjectData.credits}
                      onChange={handleChange}
                      className="shadow-sm bg-[#F2F2F2]  text-zinc-900 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 dark:bg-darkNav/80 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-slate-500 dark:focus:border-slate-500 dark:shadow-sm-light dark:text-slate-200"
                      placeholder="Subject Credits"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      CCA/Mid-Sem Marks
                    </label>
                    <input
                      type="number"
                      name="ccaMarks"
                      value={subjectData.ccaMarks}
                      onChange={handleChange}
                      className="shadow-sm bg-[#F2F2F2]  text-zinc-900 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 dark:bg-darkNav/80 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-slate-500 dark:focus:border-slate-500 dark:shadow-sm-light dark:text-slate-200"
                      placeholder="Out of 50"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      End-Sem Marks
                    </label>
                    <input
                      type="number"
                      name="endSemMarks"
                      value={subjectData.endSemMarks}
                      onChange={handleChange}
                      className="shadow-sm bg-[#F2F2F2]  text-zinc-900 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 dark:bg-darkNav/80 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-slate-500 dark:focus:border-slate-500 dark:shadow-sm-light dark:text-slate-200"
                      placeholder="Out of 50"
                      required
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  <svg
                    className="mr-1 -ml-1 w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Edit Subject
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditSubject;
