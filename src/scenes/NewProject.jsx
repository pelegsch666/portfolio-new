const NewProject = ({ projName, projGithub, projLive, projPic }) => {
  console.log(projLive);
  return (
    <div className="flex flex-col justify-center text-center items-center p-10 bg-red max-w-[700px] max-h-[700px] text-2xl font-playfair font-semibold ">
      {projName}

      <div className="flex justify-between gap-3">
        <a
          href={projGithub}
          rel="noreferrer"
          target="_blank">
          <button
          className="bg-blue"
          >Github link 🤖</button>
        </a>
        <a
          href={projLive}
          rel="noreferrer"
          target="_blank">
           <button
          className="bg-deep-blue"
          >See It Live 🤘</button>
        </a>
      </div>
    </div>
  );
};

export default NewProject;
