import { useContext, useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/AuthContext';
import { Eye, EyeOff } from "lucide-react";
import { aspauth } from '../../firebase';

function SignUp() {
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [branch, setBranch] = useState('ICT')
  const [semester, setSemester] = useState('1')
  const [enrollmentnumber, setEnrollmentnumber] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [termsChecked, setTermsChecked] = useState(false);
  const [error, setError] = useState('');
  const { createUser } = useContext(UserContext);
  const [emailPlaceholder, setemailPlaceholder] = useState("name.branchYY@adaniuni.ac.in");
  const [passworderror, setpassworderror] = useState("");
  const [eye, seteye] = useState(false);
  const navigate = useNavigate();

  const showeye = () => {
    seteye(!eye);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Split email address into local and domain parts
    const [localPart, domainPart] = email.split('@');

    // Check if the domain part is "adaniuni.ac.in"
    if (domainPart !== 'adaniuni.ac.in') {
      setEmail('');
      setemailPlaceholder("Please use an email ending with @adaniuni.ac.in");
      return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      return;
    }

    // Check if terms and conditions are accepted
    if (!termsChecked) {
      return;
    }

    // If all checks pass, attempt to create the user
    try {
      await createUser(aspauth,email, password).then(()=>{
        console.log({
          firstName,
          lastName,
          branch,
          email,
          semester,
          enrollmentnumber,
        })
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setTermsChecked(false);
        setemailPlaceholder("name.branchYY@adaniuni.ac.in");
        setpassworderror("");
        setTimeout(() => {
          navigate("/dashboard")
        }, 1000);
      })
    } catch (err) {
      setError(err.message);
      console.log(`The error is ${error}`);
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 pt-10 ">
      <div className="flex flex-col items-center justify-center px-4 py-4 mx-auto ">
        <Link
          to={"/"}
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img
            className="w-16 mr-2"
            src="assets/FinalLogo.png"
            alt="logo"
          />
        </Link>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md lg:max-w-xl xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className=" space-y-4 md:space-y-6 p-8">
         
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create an account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="First Name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="First Name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Atmaram"
                  required="true"
                  onChange={(e) => setfirstName(e.target.value)}
                  value={firstName}
                />
              </div>
              <div>
                <label
                  htmlFor="Last Name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="Last Name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Bhide"
                  required="true"
                  onChange={(e) => setlastName(e.target.value)}
                  value={lastName}
                />
              </div>

              <div className=' w-full flex items-center justify-between space-x-2'>
                <div className='w-1/2'>
                  <label
                    htmlFor="Branch"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white w-1/2"
                  >
                    Branch
                  </label>
                
                  <select name="branch" required="true" value={branch} onChange={(e)=> setBranch(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="ICT" className='mb-2 p-2' selected= "true">ICT</option>
                    <option value="CSE" className='mb-2 p-2'>CSE</option>

                  </select>
                </div>
                <div className='w-1/2'>
                  <label
                    htmlFor="Semester"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white w-1/2"
                  >
                    Semester
                  </label>
                  <select name="semester" required="true" value={semester} onChange={(e)=> setSemester(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="1" className='mb-2 p-2' selected= "true">1</option>
                    <option value="2" className='mb-2 p-2'>2</option>
                    <option value="3" className='mb-2 p-2'>3</option>
                    <option value="4" className='mb-2 p-2'>4</option>
                    <option value="5" className='mb-2 p-2'>5</option>
                    <option value="6" className='mb-2 p-2'>6</option>
                    <option value="7" className='mb-2 p-2'>7</option>
                    <option value="8" className='mb-2 p-2'>8</option>

                  </select>
                </div>
              </div>
                <div>
                <label
                  htmlFor="enrollmentnumber"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Enrollment Number
                </label>
                <input
                  type="number"
                  id="enrollmentnumber"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Example : 220012"
                  required="true"
                  onChange={(e) => setEnrollmentnumber(e.target.value)}
                  value={enrollmentnumber}

                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder={emailPlaceholder}
                  required="true"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div>
                <label
                  
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className={(password === confirmPassword) != " " ? '  border text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:bg-green-700 dark:border-green-300':'bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-red-300 border-red-300 p-2.5'}
                   
                  
                  required="true"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  
                />
              </div>
              <div>
                <label
                  htmlFor="confirm-password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirm password
                </label>
                <div className='relative flex items-center'>

                <input
                  type={eye ? 'password' : 'text'}
                  name="confirm-password"
                  id="confirm-password"
                  placeholder="••••••••"
                  
                  className={password === confirmPassword ? '  border  text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:bg-green-700 dark:border-green-300':'bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-red-300 border-red-300 p-2.5'}
                   
                  required="true"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  value={confirmPassword}
                  />
                <button className='absolute right-2'
                onClick={showeye}
                >
                  <div >
                  <Eye className='text-white'strokeWidth={1.25} hidden={eye} />
                  <EyeOff className='text-white'strokeWidth={1.25}  hidden={!eye}/>
                  </div>
                </button>
                  </div>
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    required=""
                    onChange={(e) => setTermsChecked(e.target.checked)}
                    checked={termsChecked}
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="terms"
                    className="font-light text-gray-500 dark:text-gray-300"
                  >
                    I accept the{" "}
                    <a
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      href="#"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 disabled:bg-slate-500 disabled:dark:hover:bg-none disabled:dark:bg-slate-500 disabled:dark:text-gray-400 disabled:text-gray-400 disabled:cursor-not-allowed"
                disabled={!termsChecked}
              >
                Sign Up
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <Link
                  to={"/signin"}
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
