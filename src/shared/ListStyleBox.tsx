import type { ListTypes } from "../utils/interface";

const ListStyleBox: React.FC<ListTypes> = ({
  items,
  activeItems,
  className,
}) => {
  return (
    <div>
      <nav
        className={`list-none flex gap-5 font-poppins text-xl cursor-pointer ${className}`}
      >
        {items.map((item, i) => (
          <li
            key={i}
            className={
              item === activeItems ? "text-primary" : "text-TextPrimary"
            }
          >
            {item}
          </li>
        ))}
      </nav>
    </div>
  );
};
export default ListStyleBox;
