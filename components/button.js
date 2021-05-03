export default function Buttons({ button, filter }) {
  return (
    <div className="mb-5">
      {button.map((cat, i) => {
        return (
          <button
            key={i}
            type="button"
            className="btn"
            onClick={() => filter(cat)}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}
