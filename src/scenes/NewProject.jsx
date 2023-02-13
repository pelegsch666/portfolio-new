const NewProject = ({ projName, projGithub, projLive, projPic }) => {
  console.log(projLive)
    return (
    <div className="flex justify-center text-center items-center p-10 bg-red max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold ">
      {projName}
      

      <div className="flex justify-between">
        <a href={projGithub} rel="noreferrer" target='_blank'>Github link</a>
        <a href={projLive} rel="noreferrer" target='_blank'>See it Live</a>
      </div>
    </div>
  );
};

export default NewProject;
