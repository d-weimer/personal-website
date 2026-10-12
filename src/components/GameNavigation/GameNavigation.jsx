import "./GameNavigation.css";

function GameNavigation({ selectedType, onSelectType }) {
  const categories = [
    { id: "featured", label: "Featured" },
    { id: "prototype", label: "Prototypes" },
    { id: "study", label: "Studies" },
    { id: "card", label: "Card Games" },
    { id: "work", label: "Professional Work" },
  ];

  return (
    <nav className="game-navigation">
      {categories.map((cat) => (
        <button
          key={cat.id}
          className={`game-navigation__button ${
            selectedType === cat.id ? "game-navigation__button--active" : ""
          }`}
          onClick={() => onSelectType(cat.id)}
        >
          {cat.label}
        </button>
      ))}
    </nav>
  );
}

export default GameNavigation;
