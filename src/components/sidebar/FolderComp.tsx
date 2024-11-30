import folderImg from "/sidebar/folder.png";

const FolderComp = ({ folderName }: { folderName: string }) => {
  return (
    <div data-tooltip-id="tooltip" data-tooltip-content={folderName} className=" cursor-pointer   flex flex-col items-center">
      <img alt="icon showing a folder" src={folderImg} />
      <p className="sm:hidden">{folderName}</p>
    </div>
  );
};

export default FolderComp;
