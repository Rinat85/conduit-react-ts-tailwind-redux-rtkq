import { FC } from 'react';
import { Link } from 'react-router-dom';
import { FavoriteButton } from 'modules/feed/components/favorite-button/favorite-button.component';
import { TagList } from 'modules/feed/components/tag-list/tag-list.component';
// interface IArticleProps {};

export const Article: FC = (props) => {
  return (
    <article>
      <div className="border-t border-black/10 py-6">
        <div className="mb-4 font-light flex">
          <Link to="/@nokwin">
            <img
              src="https://api.realworld.io/images/demo-avatar.png"
              alt="avatar"
              className="inline-block h-8 w-8 rounded-full"
            />
          </Link>
          <div className="mr-6 ml-0.3 leading-4 inline-flex flex-col">
            <Link to="/@nokwin" className="font-medium">
              John Doe
            </Link>
            <span className="text-conduit-grey text-date">4 ноября 2022</span>
          </div>
          <FavoriteButton />
        </div>
        <Link to="/article/qwerty" className="hover:no-underline">
          <h1 className="mb-1 font-semibold text-2xl text-conduit-darkestGray">
            some title
          </h1>
          <p className="text-conduit-darkenGrey font-light mb-1">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat
            dolor natus doloremque rem odio earum quidem omnis ipsam nostrum
            nesciunt culpa quos, id illum provident autem ut minus. Possimus
            maxime voluptatum tempora non labore voluptate facere maiores
            voluptates accusantium quisquam rem id assumenda impedit quos, nobis
            nesciunt necessitatibus illum nulla, doloremque atque explicabo
            error similique esse. Quis libero quos deleniti, culpa minima sit,
            rem eos inventore, corporis facilis eius. Sapiente harum nesciunt
            repellendus inventore autem? Maxime, sapiente quod quae iure
            excepturi nostrum doloremque explicabo cumque ullam adipisci quis
            reiciendis voluptatem aperiam exercitationem earum sint sed itaque
            accusantium placeat quia corrupti.
          </p>
          <div className="flex justify-between">
            <span className="text-conduit-grey text-date font-light">
              Read more...
            </span>
            <TagList />
          </div>
        </Link>
      </div>
    </article>
  );
};
