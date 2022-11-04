import { FC } from 'react';
// interface IFavoriteButtonProps {};

export const FavoriteButton: FC = () => {
  return (
    <button className="text-conduit-green border-conduit-green text-center align-middle cursor-pointer select-none border rounded-buttonSm py-1 px-2 text-sm focus:text-white focus:bg-conduit-darkGreen hover:text-white hover:bg-conduit-green">
      <i className="ion-heart"></i>
      <span className="ml-1 font-normal">70</span>
    </button>
  );
};
