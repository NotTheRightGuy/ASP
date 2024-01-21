import * as React from "react"
import { UserContext } from "../../src/context/AuthContext"


function Drag() {
    const {mode} = React.useContext(UserContext);
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={1280}
    height={1280}
    viewBox="0 0 1600 1600"
  >
    <path
      fill={mode === 'dark' ? '#cbd5e1' : '#111827'}
      d="m540 425 2.72-.01c.985.003 1.97.004 2.99.006l3.19-.006c3.56-.006 7.11-.004 10.7-.003a17083.72 17083.72 0 0 1 26.69-.02c7.57 0 15.1-.007 22.7-.013 18.3-.016 36.6-.022 54.9-.027 8.66-.002 17.3-.006 26-.01 29.6-.013 59.3-.023 88.9-.027h5.58l5.59-.001 11.2-.001h2.81c30.1-.004 60.2-.02 90.3-.044a129646.192 129646.192 0 0 1 105.9-.04h2.6c13.8-.001 27.7-.012 41.5-.027 13.9-.014 27.8-.017 41.7-.01 8.26.005 16.5.001 24.8-.014 6.17-.011 12.3-.007 18.5.004 2.5.002 5 0 7.49-.01 3.39-.01 6.78-.003 10.2.009l2.96-.023c6.47.05 12.4.626 17.6 4.94 4.12 6.53 3.85 13.2 3.79 20.7a1308.095 1308.095 0 0 1 .026 16.25c-.01 4.29.01 8.58.026 12.9.024 7.43.03 14.9.023 22.3-.01 10.7.008 21.5.032 32.2.039 17.4.056 34.8.058 52.3.003 16.9.016 33.8.043 50.8l.005 3.16.026 15.7c.073 43.4.11 86.8.122 130l3.27.81c1.44.359 2.88.718 4.32 1.07.708.176 1.42.352 2.14.533 6.61 1.65 13.2 3.48 19.7 5.4l1.89.549c18.6 5.43 37.2 11.2 55.8 16.9 5.08 1.57 10.2 3.11 15.3 4.61 1.03.308 2.07.615 3.13.932 1.96.58 3.91 1.16 5.87 1.72 13.7 4.09 13.7 4.09 17.6 8.8 2.44 5.26 4.11 8.93 2.09 14.7-5.28 9.74-15.5 18.2-23.8 25.3-5.88 5.08-11.2 10.7-16.6 16.3l-2.47 2.5c-.735.75-1.47 1.5-2.23 2.28-1.84 1.63-1.84 1.63-3.84 1.63v2c-1.33 1.3-1.33 1.3-3.25 2.88-4.49 3.8-8.6 7.92-12.7 12.1-3.84 3.9-3.84 3.9-6.04 5 1.61 4.03 4.46 6.72 7.5 9.7.561.558 1.12 1.12 1.7 1.69 1.22 1.21 2.44 2.42 3.66 3.62 1.93 1.91 3.86 3.82 5.79 5.74 4.78 4.76 9.58 9.51 14.4 14.3 4.05 4.01 8.1 8.03 12.1 12.1l5.7 5.64c1.17 1.16 2.33 2.32 3.5 3.48l1.6 1.57c3.98 3.98 7.45 7.73 7.53 13.6-.628 10.5-10.2 17.8-17.2 24.7-1.14 1.15-2.29 2.29-3.43 3.44-2.39 2.39-4.78 4.78-7.18 7.16-3.06 3.05-6.12 6.11-9.16 9.17-2.36 2.37-4.72 4.73-7.09 7.09l-3.38 3.38c-1.57 1.58-3.15 3.15-4.74 4.72-.895.893-1.79 1.79-2.71 2.71-4.08 3.5-8.11 5.71-13.5 5.84l-2.37.129c-9.46-2.37-17.6-13.2-24.2-20-1.29-1.29-2.58-2.58-3.87-3.88-3.37-3.38-6.74-6.76-10.1-10.1-3.44-3.46-6.89-6.92-10.3-10.4-6.75-6.77-13.5-13.5-20.2-20.3-4.06 2.65-7.51 5.27-10.9 8.74-.892.903-1.78 1.81-2.7 2.74-.915.937-1.83 1.87-2.77 2.84-5.45 5.55-10.9 11-16.8 16.1-3.1 2.72-5.96 5.67-8.85 8.62-4.18 4.23-8.38 8.32-12.9 12.1-1.74 1.56-3.37 3.16-5 4.83-.526.538-1.05 1.08-1.59 1.63-1.03 1.07-2.06 2.14-3.08 3.22-3.83 3.95-7.45 6.68-12.9 7.61-5.65.009-9.08-.488-13.4-4.43-3.1-4.19-4.95-8.12-6.56-13.1-.338-1.02-.338-1.02-.683-2.07-.74-2.25-1.47-4.5-2.2-6.75a4640.606 4640.606 0 0 1-5.7-17.46c-1.16-3.56-2.32-7.12-3.48-10.7a6838.025 6838.025 0 0 1-11.13-34.26c-.715-2.22-1.42-4.44-2.13-6.67l-.652-2.02c-.883-2.8-1.47-5.04-1.47-8h-225l-1 15c-3.86.965-6.58 1.04-10.5.879l-3.79-.146-3.95-.17-3.99-.158c-3.25-.13-6.51-.266-9.76-.404v-14c-2.29-1.15-3.57-1.13-6.12-1.14l-2.63-.017-2.91-.003-3.07-.015c-3.42-.015-6.85-.023-10.3-.032l-7.45-.03c-5.99-.025-12-.044-18-.062-6.93-.021-13.9-.048-20.8-.075-18.3-.069-36.6-.13-54.9-.19-40.9-.144-81.8-.29-124-.438-.33-82.8-.66-166-1-251h-15v-32h13l2-1 .007-3.56c.058-27.9.13-55.8.222-83.7l.034-10.3.007-2.07c.035-11.1.06-22.1.08-33.2.023-11.4.056-22.7.1-34.1.023-6.38.042-12.8.048-19.1.006-6 .026-12 .057-18 .009-2.21.012-4.41.01-6.62-.001-3.01.016-6.01.037-9.02l-.015-2.66c.065-5.58.93-9.02 4.88-13.2 4.43-3.62 7.4-4.58 13-4.58zm13.5 32.1v461h466c-2.82-9.39-5.72-18.8-8.67-28.1-.598-1.9-1.19-3.8-1.79-5.7-.864-2.76-1.73-5.52-2.61-8.28l-.802-2.58-.759-2.39c-.217-.692-.435-1.38-.659-2.1-.747-2.14-.747-2.14-2.71-4.85-2.86-.455-2.86-.455-6.29-.374l-1.99-.012c-2.22-.01-4.44.002-6.66.014l-4.8-.012c-4.41-.01-8.82-.002-13.2.01-4.75.008-9.5 0-14.2-.007-8.24-.009-16.5-.008-24.7 0-11.9.012-23.8.003-35.7-.012-19.3-.024-38.7-.037-58-.041l-3.51-.001a139572.934 139572.934 0 0 0-52.8-.001h-3.5c-19.3 0-38.5-.014-57.8-.041-11.9-.016-23.8-.018-35.7-.003-8.14.01-16.3.005-24.4-.011-4.7-.009-9.4-.011-14.1.004-4.3.014-8.6.01-12.9-.01-1.56-.003-3.12 0-4.68.01-2.11.014-4.23.003-6.34-.014h-3.56c-3.75-.604-5.41-1.87-8.11-4.5-1.32-2.63-1.13-4.58-1.13-7.53l-.013-3.58v-3.97l-.011-4.19c-.01-3.85-.014-7.7-.016-11.6-.004-4.15-.014-8.3-.023-12.4-.02-10-.03-20-.038-30.1l-.015-14.2a75136.133 75136.133 0 0 1-.045-59.2l-.001-3.06c-.009-16.4-.034-32.8-.066-49.2-.033-16.8-.052-33.6-.055-50.5-.002-9.45-.01-18.9-.036-28.3-.022-8.04-.03-16.1-.02-24.1.004-4.11.002-8.21-.017-12.3-.018-3.76-.017-7.51-.001-11.3.003-2.01-.013-4.01-.03-6.02l.026-3.6-.003-3.11c.631-3.54 2.04-5.22 4.5-7.79 3.03-1.52 6.18-1.14 9.51-1.13l2.39-.007c2.67-.007 5.33-.006 8-.006l5.76-.01c5.3-.01 10.6-.014 15.9-.017 5.71-.004 11.4-.014 17.1-.022 13.8-.02 27.6-.03 41.4-.04 6.49-.003 13-.009 19.5-.014 21.6-.017 43.1-.032 64.7-.039l4.18-.001h2.1l10.5-.005h2.11c22.6-.008 45.1-.032 67.7-.064 23.8-.034 47.7-.054 71.5-.057 13-.003 26-.011 39-.037 11.1-.022 22.1-.03 33.2-.02 5.65.005 11.3.003 16.9-.017 5.17-.017 10.3-.016 15.5 0 1.87.002 3.75-.003 5.62-.015 2.54-.015 5.08-.005 7.62.01l2.22-.03c4.82.065 7.28 1.1 10.7 4.53 1.13 2.27 1.13 3.51 1.14 6.03l.017 2.57.003 2.84.015 3c.015 3.34.024 6.68.032 10l.03 7.15c.024 5.82.044 11.6.062 17.4.02 6.77.047 13.5.074 20.3.048 12.1.091 24.1.131 36.2.04 11.7.08 23.4.125 35.2l.008 2.19.041 10.9c.114 30.1.221 60.1.323 90.2 1.63.708 1.63.708 3.28 1.43l1.85.805c2.91 1.19 5.89 2.03 8.91 2.89l1.97.564c2.06.589 4.12 1.17 6.18 1.75 2.7.766 5.4 1.54 8.11 2.31.655.187 1.31.373 1.98.566 5.18 1.49 10.3 3.18 15.4 4.97 2.43.859 2.43.859 5.36.715v-319c-44.3-.868-44.3-.868-88.6-1.14a122189.431 122189.431 0 0 1-9.6.004c-5.8.003-11.6 0-17.4-.004-11.3-.004-22.6-.003-33.8 0-9.19.002-18.4.002-27.6.001h-10.05c-25-.004-50-.001-75 .004-22.1.005-44.1.005-66.2 0a221040.586 221040.586 0 0 0-82.93-.004h-3.99c-9.15.002-18.3 0-27.5-.002-11.2-.003-22.4-.002-33.6.003a16143.207 16143.207 0 0 1-26.05-.005c-27.9-.011-55.7.58-83.7 1.14zm76 78c-.098 2.68-.13 5.34-.12 8.02l-.003 2.58c-.001 2.87.004 5.74.01 8.61v6.15c-.001 5.58.005 11.2.012 16.7.006 5.83.007 11.7.008 17.5.003 11 .011 22.1.021 33.1.011 12.6.017 25.1.022 37.7.01 25.9.028 51.7.05 77.6 4.06-1.82 6.11-4.41 8.69-7.94.888-1.19 1.78-2.37 2.67-3.56l1.35-1.8c1.87-2.46 3.83-4.83 5.8-7.21 3.6-4.36 7.06-8.82 10.5-13.3 3.35-4.38 6.82-8.66 10.3-12.9 4.57-5.58 9.02-11.2 13.4-17 4.47-5.9 9.07-11.6 13.8-17.3 2.76-3.32 5.43-6.69 8.09-10.1l1.41-1.79c2.06-2.63 4.1-5.26 6.09-7.95 7.22-9.57 16-15.8 27.9-18.1 12.6-1.52 24.1.339 34.5 8.06 1.52 1.29 3.02 2.6 4.5 3.94l2.91 2.62c3.39 3.09 6.74 6.23 10.1 9.38 2.52 2.36 5.04 4.71 7.56 7.06.63.589 1.26 1.18 1.91 1.78 7.38 6.89 14.8 13.7 22.3 20.5 4.96 4.44 9.81 8.99 14.7 13.6 3.11 2.92 6.25 5.78 9.47 8.58 4.95 4.3 9.68 8.84 14.4 13.4.673.639 1.35 1.28 2.04 1.94.598.573 1.2 1.15 1.81 1.74 1.84 1.53 3.62 2.51 5.8 3.49l2.28-1.58c15.2-10.6 30.5-21 45.8-31.4 2.92-1.99 5.84-3.99 8.77-5.98 18-12.3 18-12.3 25.1-17 2.49-1.66 4.96-3.34 7.42-5.04l2.38-1.62c1.53-1.05 3.06-2.1 4.59-3.16 13.2-8.94 27.7-11.3 43.4-8.56 11.1 3.11 19.5 9.27 27.8 17 3.51 3.22 7.21 6.19 10.9 9.18 3.09 2.54 6.04 5.21 8.96 7.94 1.72 1.51 1.72 1.51 4.66 1.21v-147a798221.063 798221.063 0 0 0-184.5-.055h-3.92c-21-.005-42-.013-63-.022-21.5-.01-43-.015-64.6-.017-13.3-.001-26.6-.006-39.9-.014-9.1-.005-18.2-.007-27.3-.005-5.26 0-10.5 0-15.8-.006-4.81-.005-9.61-.005-14.4-.002-1.75 0-3.49 0-5.24-.004-2.36-.004-4.72-.002-7.08.002l-3.98-.001c-2.79-.208-2.79-.208-3.9 1.12zm99 122c-1.99 2.51-3.95 5.05-5.89 7.61-3.42 4.52-6.96 8.94-10.5 13.3-5.95 7.28-11.8 14.7-17.6 22.1-5.72 7.33-11.5 14.6-17.4 21.8a594.22 594.22 0 0 0-13.3 16.9c-4.47 5.9-9.06 11.6-13.8 17.3-4.1 4.93-8.1 9.95-12 15.1-1.52 1.9-1.52 1.9-3.29 3.74-5.97 6.56-6.18 12.1-5.95 20.7l.023 3.86c.027 3.35.084 6.71.157 10.1.052 2.75.074 5.5.094 8.25.042 5.67.107 11.3.22 17l.057 3.03c-.082 2.23-.082 2.23 1.17 3.26 1.78.097 3.57.124 5.35.123l3.54.006 3.94-.009 4.15.003c3.82.002 7.63-.002 11.5-.007 4.11-.004 8.22-.003 12.3-.002 7.13 0 14.3-.003 21.4-.008 10.3-.008 20.6-.011 30.9-.012 16.7-.003 33.4-.01 50.1-.019 16.2-.009 32.5-.016 48.7-.02h3.03l15.1-.005c41.7-.01 83.3-.028 125-.05-1.69-3.65-3.62-5.67-6.69-8.31-3.07-2.69-6.08-5.39-8.94-8.31-2.28-2.32-4.63-4.5-7.09-6.62-4.15-3.61-8.16-7.35-12.2-11.1-5.15-4.85-10.3-9.66-15.6-14.4-1.98-1.78-3.93-3.58-5.87-5.41-.583-.546-1.17-1.09-1.77-1.65-1.14-1.07-2.28-2.14-3.41-3.22-2.66-2.49-5.06-4.61-8.46-5.98v-2c-1.35-1.4-1.35-1.4-3.19-2.88-2.77-2.35-5.49-4.73-8.13-7.22-.576-.54-1.15-1.08-1.75-1.64-1.15-1.09-2.31-2.18-3.45-3.27-2.48-2.32-4.22-3.91-7.48-5v-2c-1.31-1.37-1.31-1.37-3.12-2.81-2.89-2.44-5.7-4.94-8.45-7.54a457.9 457.9 0 0 1-1.89-1.79c-1.26-1.19-2.52-2.39-3.78-3.59-2.89-3.17-2.89-3.17-6.75-4.27l-1-3c-1.59-1.63-1.59-1.63-3.56-3.22-4.98-4.22-9.7-8.69-14.4-13.2a374.08 374.08 0 0 0-12.3-11.1 78.347 78.347 0 0 1-4.62-4.49c-1.87-2.29-1.87-2.29-4.12-2.06v-2c-1.38-1.43-1.38-1.43-3.25-2.94-7.4-6.3-14.5-13-21.6-19.6-1.09-1-2.18-2.01-3.26-3.01-2.71-2.49-5.4-5-8.07-7.52-10.5-10-10.5-10-24-14.3-8.2.683-13.6 5.23-18.8 11.3zm246 20c-.56.382-1.12.763-1.7 1.16-3.26 2.22-6.51 4.46-9.75 6.7-5.04 3.49-10.1 6.94-15.2 10.4-.923.628-1.85 1.26-2.8 1.9-1.9 1.29-3.79 2.58-5.69 3.88-2.92 1.99-5.84 3.99-8.77 5.98-1.92 1.31-3.83 2.62-5.75 3.93-.927.633-1.85 1.27-2.81 1.92-4.67 3.18-9.35 6.34-14.1 9.46-6.62 4.39-13.1 9.04-19.5 13.7 4.02 4.97 8.33 9.22 13.1 13.4 2.14 1.91 4.25 3.83 6.34 5.8.586.55 1.17 1.1 1.78 1.67a537.6 537.6 0 0 1 3.47 3.28c2.69 2.88 2.69 2.88 6.29 3.81l1 3c1.42 1.48 1.42 1.48 3.25 2.94 3.75 3.18 7.39 6.46 11 9.81 1.12 1.04 2.24 2.07 3.36 3.11.84.778.84.778 1.7 1.57 2.73 2.53 5.46 5.05 8.19 7.57.938.866 1.88 1.73 2.84 2.62 1.69 1.51 3.41 2.97 5.19 4.38 2.69 2.18 5.04 4.53 7.47 7 2.83 2.75 5.7 5.47 8.56 8.19.755.724 1.51 1.45 2.29 2.19.732.693 1.46 1.39 2.22 2.1.659.628 1.32 1.26 2 1.9 1.9 1.59 3.68 2.61 5.94 3.62v2c2.64 2.4 2.64 2.4 6 3-2.25-8.73-4.98-17.3-7.82-25.8l-1.39-4.21c-1.21-3.66-2.41-7.32-3.62-11-1.94-5.87-3.87-11.7-5.81-17.6-.671-2.04-1.34-4.07-2.02-6.11-.411-1.25-.821-2.49-1.24-3.77-.36-1.09-.719-2.18-1.09-3.3-2.61-8.19-4.26-13.6-.393-21.5 2.97-3.36 5.05-4.48 9.38-5.69 12.7-.359 26.4 5.82 38.5 9.31l2.56.739c20.4 5.89 20.4 5.89 30.2 9.2 5.16 1.7 10.4 2.77 15.7 3.75.249-5.53.429-11.1.549-16.6.05-1.88.118-3.76.205-5.64.81-11 .81-11-2.86-20.9-2.52-2.28-5-4.06-7.9-5.84-1.6-1.25-3.18-2.52-4.75-3.81-.82-.646-1.64-1.29-2.48-1.96-3.32-2.67-6.54-5.45-9.77-8.23-17.6-16.8-17.6-16.8-39.9-23.2-8.54.99-15.1 5.49-22.1 10.2z"
    />
    <path
      fill={mode === 'dark' ? '#cbd5e1' : '#111827'}
      d="M897 575c1.68 1.17 3.35 2.35 5 3.56 1.07.763 2.14 1.53 3.25 2.31 9.47 9.26 15.7 21.8 16 35.1.125 15.8-3.59 28.8-14.8 40.4-1.15 1.06-2.31 2.11-3.5 3.12l-1.54 1.36c-11.8 9.45-27 10.8-41.5 9.64-14.1-2.7-25.8-11.2-33.8-22.8-7.52-11.4-9.91-24.6-7.74-38 3.46-14.1 11.1-26.7 23.5-34.6 17.7-9.66 37.5-11 55.1-.125zm-50.6 27.5c-3.89 5.84-6.03 13.1-5.15 20.1 2.02 9.21 6.12 15.4 13.8 21 7.15 4.13 14.5 5.42 22.6 3.32 9.25-3.4 14.2-8.06 18.4-16.9 2.82-7.06 2.96-14.3.445-21.5-3.16-7.04-8.14-12.1-15.1-15.4-13.4-4.59-26.2-1.67-35 9.39zM296 1127h32v16h16v31c-2.34 1.17-3.73 1.13-6.34 1.13l-2.72.01-2.94-.007-3.01.003c-2.1.001-4.2 0-6.31-.005-3.23-.005-6.46 0-9.69.006-2.04 0-4.08-.002-6.12-.004l-2.95.007-2.71-.01-2.4-.002c-1.82-.127-1.82-.127-2.82-1.13a68.045 68.045 0 0 1-.114-4.43v-2.85l.016-3.1.004-3.16c.006-3.34.018-6.68.031-10l.014-6.78c.01-5.55.03-11.1.049-16.7zM773 1127c4.4-.023 8.79-.043 13.2-.055 1.5-.005 2.99-.012 4.49-.02 2.15-.013 4.29-.018 6.44-.023l3.92-.016c2.96.114 2.96.114 3.96 1.11.093 1.44.117 2.89.114 4.34v2.79l-.016 3.03-.004 3.09c-.006 3.27-.018 6.54-.031 9.81l-.014 6.63c-.01 5.43-.028 10.9-.049 16.3-2.34 1.17-3.73 1.13-6.34 1.13l-2.72.01-2.94-.006-3.01.003c-2.1 0-4.2-.001-6.31-.006-3.23-.005-6.46 0-9.69.007-2.04 0-4.08-.002-6.12-.004l-2.95.006-2.71-.01-2.4-.002c-1.82-.127-1.82-.127-2.82-1.13-.087-2.29-.107-4.59-.097-6.88l.004-2.08c.006-2.2.018-4.4.031-6.6l.014-4.47c.01-3.66.03-7.31.048-11h16v-16zM296 666c32.3-.199 32.3-.199 48 1v30c-3.42 1.14-6.09 1.1-9.69 1.06l-3.57-.027-2.74-.036.035 3.25c.01 1.4.019 2.79.027 4.19l.026 2.14c.009 1.81-.036 3.61-.088 5.42-1.88 1.88-5.12 1.13-7.62 1.13l-2.01.003c-1.4.001-2.8 0-4.21-.005-2.15-.005-4.31 0-6.46.006-1.36 0-2.72-.002-4.08-.004l-3.77-.003c-2.85-.129-2.85-.129-3.85-1.13a68.045 68.045 0 0 1-.114-4.43v-2.85l.016-3.1.004-3.16c.006-3.34.018-6.68.031-10l.014-6.78c.01-5.55.028-11.1.049-16.7zM642 1143l3.06.007h3.46l3.76.016 3.83.004c3.37.005 6.73.014 10.1.025 3.43.01 6.86.014 10.3.02 6.74.01 13.5.027 20.2.048 1.12 3.36 1.11 5.88 1.1 9.42l-.01 3.8-.025 3.97-.014 4.01c-.012 3.27-.028 6.54-.049 9.81-3.53.804-6.8 1.13-10.4 1.13l-3.2.01-3.43-.006-3.54.002c-2.46.001-4.92 0-7.38-.005-3.78-.005-7.57 0-11.4.006l-7.17-.003-3.45.006-3.17-.01-2.8-.002c-2.1-.127-2.1-.127-3.1-1.13-.1-2.21-.13-4.42-.133-6.62l-.003-2.01c0-1.4.002-2.8.006-4.21.005-2.15 0-4.31-.007-6.46l.004-4.08.004-3.77c.172-3.8.172-3.8 3.41-3.97zM404 1143c7.41-.02 14.8-.041 22.2-.052 3.45-.005 6.9-.012 10.3-.024a5505 5505 0 0 1 11.9-.022l3.76-.015h3.46l3.06-.007c2.28.12 2.28.12 3.28 1.12.088 2.22.107 4.44.098 6.66l-.005 2.01c-.005 2.13-.018 4.26-.03 6.39a3904.73 3904.73 0 0 1-.063 14.92c-2.59 1.3-4.46 1.12-7.37 1.11h-3.4l-3.68-.016-3.76-.004c-3.3-.005-6.6-.014-9.89-.025-3.36-.01-6.73-.015-10.1-.02-6.6-.01-13.2-.03-19.8-.049v-32zM296 774h32v57c-2.86 1.43-5.31 1.13-8.5 1.13l-3.93.004-2.05-.006c-2.07-.006-4.14 0-6.22.006l-3.93-.004-3.63-.003c-2.74-.13-2.74-.13-3.74-1.13a98.532 98.532 0 0 1-.114-5.35v-3.46l.016-3.76.004-3.83c.005-3.37.014-6.73.025-10.1.01-3.43.015-6.86.02-10.3.01-6.74.03-13.5.048-20.2zM522 1143c7.41-.02 14.8-.041 22.2-.052 3.45-.005 6.9-.012 10.3-.024a5505 5505 0 0 1 11.9-.022l3.76-.015h3.46l3.06-.007c2.28.12 2.28.12 3.28 1.12.088 2.22.107 4.44.098 6.66l-.005 2.01c-.005 2.13-.018 4.26-.03 6.39a3904.73 3904.73 0 0 1-.063 14.92c-2.59 1.3-4.46 1.12-7.37 1.11h-3.4l-3.68-.016-3.76-.004c-3.3-.005-6.6-.014-9.89-.025-3.36-.01-6.73-.015-10.1-.02-6.6-.01-13.2-.03-19.8-.049v-32zM296 1009c10.7 0 21.4.114 32 1v57h-32v-58zM300 891l3.92.143 3.81.131 4.88.186 15.4.562v57h-32c-.02-7.41-.041-14.8-.052-22.2-.005-3.45-.012-6.9-.024-10.3a5505 5505 0 0 1-.022-11.9l-.015-3.76v-3.46l-.007-3.06c.183-3.48.534-3.28 4.08-3.31zM773 1020h32c.023 7.39.043 14.8.055 22.2.005 2.52.012 5.03.02 7.55.012 3.61.018 7.21.023 10.8l.015 3.43v3.15l.007 2.79c-.12 2.09-.12 2.09-1.12 3.09-2.21.1-4.42.131-6.62.133l-2.01.003c-1.4 0-2.8-.001-4.21-.005-2.15-.006-4.31 0-6.46.006-1.36 0-2.72-.002-4.08-.004l-3.77-.003c-2.85-.13-2.85-.13-3.85-1.13a82.77 82.77 0 0 1-.114-4.89v-3.15l.016-3.43.004-3.49c.006-3.7.018-7.4.031-11.1l.014-7.5c.01-6.15.03-12.3.049-18.4zM399 666l53 1v30c-7.88 1.13-7.88 1.13-11.9 1.13l-2.72.01-2.86-.007-2.99.003c-2.07.001-4.15 0-6.22-.005-3.19-.005-6.37 0-9.56.006-2.02 0-4.03-.002-6.05-.004l-2.9.007-2.66-.01-2.35-.002c-1.78-.127-1.78-.127-2.78-1.13-.088-2.29-.107-4.59-.098-6.88l.008-3.81.027-4.88.063-15.4z"
    />
  </svg>
  )
}

export default Drag