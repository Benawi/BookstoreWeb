import { FcLike } from 'react-icons/fc';

const ChapterUpdateProgress = () => {
  const chapters = [];
  for (let i = 1; i < 31; i += 1) {
    const chapter = ` ${i}`;

    chapters.push(chapter);
  }

  const randomChapter = Math.floor(Math.random() * (chapters.length - 1));

  return (
    <div className="ChapterUPContainer">
      <div>
        <p className="fontStyle4 fontColor1 mb05">Current Status</p>
        <p className="fontStyle4 fontColor1 mb1">
          <FcLike />
          {chapters[randomChapter]}
        </p>
      </div>
      <div>
        <button className="appDefaultButton  fontColor5" type="button">Update Progress</button>
      </div>
    </div>
  );
};

export default ChapterUpdateProgress;
