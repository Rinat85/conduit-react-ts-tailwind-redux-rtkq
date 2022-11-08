import { FC } from 'react';

interface ITagListProps {
  list: string[];
}

export const TagList: FC<ITagListProps> = ({ list }) => {
  return (
    <ul className="flex">
      {list.map((tag, i) => (
        <li
          key={i}
          className="font-light text-date border border-conduit-lightenGray text-conduit-tag mr-1 mb-0.2 px-tag rounded-tag"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
};
