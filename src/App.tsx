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

function CharacterForm({ onSubmit, character }: { onSubmit: (formData: FormProps) => void; character?: FormProps }) {
  const [formData, setFormData] = useState<FormProps>(character || defaultFormData);
  const [errors, setErrors] = useState<Partial<Record<keyof FormProps, string>>>({});

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

  function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setFormData({
      ...formData,
      [event.target.id]: event.target.type === "checkbox" ? (event.target as HTMLInputElement).checked : event.target.value,
    });
  }

  function validateForm(formData: FormProps) {
    const errors: Partial<Record<keyof FormProps, string>> = {};
    if (formData.name.length < 3 || formData.name.length > 20) {
      errors.name = "Imię musi mieć od 3 do 20 znaków.";
    }
    if (formData.level < 1 || formData.level > 100) {
      errors.level = "Poziom musi być w zakresie od 1 do 100.";
    }
    if (formData.description.length > 200) {
      errors.description = "Opis nie może przekraczać 200 znaków.";
    }
    if (!formData.race) {
      errors.race = "Wybierz rasę.";
    }
    if (!formData.class) {
      errors.class = "Wybierz klasę.";
    }
    return errors;
  }

  return (
    <form onSubmit={handleSubmit} className="col">
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Imię:</label>
        <input type="text" id="name" className="form-control" value={formData.name} onChange={handleChange} /> 
        {errors.name && <span style={{ color: "red" }}>{errors.name}</span>}
      </div>
      <div className="mb-3">
        <label htmlFor="race" className="form-label">Rasa:</label>
        <select id="race" className="form-select" value={formData.race} onChange={handleChange}>
          <option value="" disabled>Wybierz rasę</option>
          <option value="Człowiek">Człowiek</option>
          <option value="Elf">Elf</option>
          <option value="Krasnolud">Krasnolud</option>
          <option value="Ork">Ork</option>
        </select>
        {errors.race && <span style={{ color: "red" }}>{errors.race}</span>}
      </div>
      <div className="mb-3">
        <label htmlFor="class" className="form-label">Klasa:</label>
        <select id="class" className="form-select" value={formData.class} onChange={handleChange}>
          <option value="" disabled>Wybierz klasę</option>
          <option value="Wojownik">Wojownik</option>
          <option value="Mag">Mag</option>
          <option value="Łucznik">Łucznik</option>
        </select>
        {errors.class && <span style={{ color: "red" }}>{errors.class}</span>}
      </div>
      <div className="mb-3">
        <label htmlFor="level" className="form-label">Poziom:</label>
        <input type="number" id="level" className="form-control" value={formData.level} onChange={handleChange} />
        {errors.level && <span style={{ color: "red" }}>{errors.level}</span>}
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">Opis:</label>
        <textarea id="description" className="form-control" value={formData.description} onChange={handleChange}></textarea>
        {errors.description && <span style={{ color: "red" }}>{errors.description}</span>}
      </div>
      <div className="mb-3">
        <label htmlFor="isPublic" className="form-label me-2">Publiczny:</label>
        <input type="checkbox" id="isPublic" className="form-check-input" defaultChecked={formData.isPublic} onChange={handleChange} />
      </div>
      <button type="submit" className="btn btn-primary">Utwórz postać</button>
      <button type="button" className="btn btn-secondary ms-3" onClick={() => {
        setFormData(defaultFormData);
      }}>
        Wyczyść formularz
      </button>
    </form>
  )
}

function CharacterCard({ name, race, class: charClass, level, description, isPublic }: FormProps) {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{race} - {charClass}</h6>
        <p className="card-text">Poziom: {level}</p>
        <p className="card-text">{description}</p>
        <p className="card-text">{isPublic ? "Publiczny" : "Prywatny"}</p>
      </div>
    </div>
  )
}

export default function App() {
  const [characters, setCharacters] = useState<FormProps[]>([]);

  return (
    <div className="container row mt-5">
      <CharacterForm onSubmit={(formData) => {
        setCharacters((prevCharacters) => [...prevCharacters, formData]);
      }} />
      <div className="col">
        {characters.toReversed().map((character) => (
          <CharacterCard {...character} />
        ))}
      </div>
    </div>
  );
}