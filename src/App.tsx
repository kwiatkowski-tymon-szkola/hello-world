import { useState, type SyntheticEvent } from "react";

interface FormProps {
  name: string; // 3-20
  race: "Człowiek" | "Elf" | "Krasnolud" | "Ork" | "";
  class: "Wojownik" | "Mag" | "Łucznik" | "";
  level: number; // 1-100
  description: string; // 0-200
  isPublic: boolean; // default: true
}

const defaultFormData: FormProps = {
  name: "",
  race: "",
  class: "",
  level: 0,
  description: "",
  isPublic: true,
};

interface ValidationRule {
  field: keyof FormProps;
  test: (formData: FormProps) => boolean;
  message: string;
}

const validationRules: ValidationRule[] = [
  {
    field: "name",
    test: (formData) => formData.name.length >= 3 && formData.name.length <= 20,
    message: "Imię musi mieć od 3 do 20 znaków.",
  },
  {
    field: "level",
    test: (formData) => formData.level >= 1 && formData.level <= 100,
    message: "Poziom musi być w zakresie od 1 do 100.",
  },
  {
    field: "description",
    test: (formData) => formData.description.length <= 200,
    message: "Opis nie może przekraczać 200 znaków.",
  },
  {
    field: "race",
    test: (formData) => Boolean(formData.race),
    message: "Wybierz rasę.",
  },
  {
    field: "class",
    test: (formData) => Boolean(formData.class),
    message: "Wybierz klasę.",
  },
];

function CharacterForm({
  onSubmit,
  character,
  onCancel,
}: {
  onSubmit: (formData: FormProps) => void;
  character?: FormProps;
  onCancel?: () => void;
}) {
  const [formData, setFormData] = useState<FormProps>(
    character || defaultFormData,
  );
  const [errors, setErrors] = useState<
    Partial<Record<keyof FormProps, string>>
  >({});

  function handleSubmit(event: SyntheticEvent) {
    event.preventDefault();
    const errors = validateForm(formData);
    setErrors(errors);
    if (Object.keys(errors).length > 0) {
      console.error(errors);
      return;
    }
    onSubmit(formData);
  }

  function handleChange(
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) {
    setFormData({
      ...formData,
      [event.target.id]:
        event.target.type === "checkbox"
          ? (event.target as HTMLInputElement).checked
          : event.target.id === "level"
            ? Number(event.target.value)
            : event.target.value,
    });
  }

  function validateForm(formData: FormProps) {
    const errors: Partial<Record<keyof FormProps, string>> = {};

    validationRules.forEach((rule) => {
      if (!rule.test(formData)) {
        errors[rule.field] = rule.message;
      }
    });

    return errors;
  }

  return (
    <div className="col">
      <h1 className="display-5">
        {character ? "Edytuj postać" : "Utwórz nową postać"}
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Imię:
          </label>
          <input
            type="text"
            id="name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span style={{ color: "red" }}>{errors.name}</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="race" className="form-label">
            Rasa:
          </label>
          <select
            id="race"
            className="form-select"
            value={formData.race}
            onChange={handleChange}
          >
            <option value="" disabled>
              Wybierz rasę
            </option>
            <option value="Człowiek">Człowiek</option>
            <option value="Elf">Elf</option>
            <option value="Krasnolud">Krasnolud</option>
            <option value="Ork">Ork</option>
          </select>
          {errors.race && <span style={{ color: "red" }}>{errors.race}</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="class" className="form-label">
            Klasa:
          </label>
          <select
            id="class"
            className="form-select"
            value={formData.class}
            onChange={handleChange}
          >
            <option value="" disabled>
              Wybierz klasę
            </option>
            <option value="Wojownik">Wojownik</option>
            <option value="Mag">Mag</option>
            <option value="Łucznik">Łucznik</option>
          </select>
          {errors.class && <span style={{ color: "red" }}>{errors.class}</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="level" className="form-label">
            Poziom:
          </label>
          <input
            type="number"
            id="level"
            className="form-control"
            value={formData.level}
            onChange={handleChange}
          />
          {errors.level && <span style={{ color: "red" }}>{errors.level}</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Opis:{" "}
            <span className="text-secondary">
              {formData.description.length}/200
            </span>
          </label>
          <textarea
            id="description"
            className="form-control"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
          {errors.description && (
            <span style={{ color: "red" }}>{errors.description}</span>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="isPublic" className="form-label me-2">
            Publiczny:
          </label>
          <input
            type="checkbox"
            id="isPublic"
            className="form-check-input"
            checked={formData.isPublic}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {character ? "Zapisz zmiany" : "Utwórz postać"}
        </button>
        {character ? (
          <button
            type="button"
            className="btn btn-secondary ms-3"
            onClick={onCancel}
          >
            Anuluj
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-secondary ms-3"
            onClick={() => {
              setFormData(defaultFormData);
              setErrors({});
            }}
          >
            Wyczyść formularz
          </button>
        )}
      </form>
    </div>
  );
}

function CharacterCard({
  name,
  race,
  class: charClass,
  level,
  description,
  isPublic,
  onEdit,
}: FormProps & { onEdit: () => void }) {
  return (
    <div className="card mb-3 ps-5 pe-5 pt-3 pb-3">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          {race} - {charClass}
        </h6>
        <p className="card-text">Poziom: {level}</p>
        <p className="card-text">Opis: {description}</p>
        <p className="card-text text-secondary">
          {isPublic ? "Publiczny" : "Prywatny"}
        </p>
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={onEdit}
        >
          Edytuj
        </button>
      </div>
    </div>
  );
}

interface Character extends FormProps {
  id: number;
}

export default function App() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);
  const editingCharacter = characters.find(
    (character) => character.id === editingId,
  );

  return (
    <div className="container row m-5">
      <CharacterForm
        key={editingId ?? "create"}
        character={editingCharacter}
        onCancel={() => setEditingId(null)}
        onSubmit={(formData) => {
          if (editingId !== null) {
            setCharacters((prevCharacters) =>
              prevCharacters.map((character) =>
                character.id === editingId
                  ? { ...formData, id: character.id }
                  : character,
              ),
            );
            setEditingId(null);
            return;
          }

          setCharacters((prevCharacters) => [
            ...prevCharacters,
            {
              ...formData,
              id:
                characters.length === 0
                  ? 0
                  : Math.max(...characters.map((character) => character.id)) +
                    1,
            },
          ]);
        }}
      />
      <div className="col">
        <h1 className="display-5 mb-4">Lista postaci</h1>
        {characters.map((character) => (
          <CharacterCard
            key={character.id}
            {...character}
            onEdit={() => setEditingId(character.id)}
          />
        ))}
      </div>
    </div>
  );
}
