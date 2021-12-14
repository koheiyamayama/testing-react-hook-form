import "./styles.css";
import { useForm, Controller } from "react-hook-form";
import { Switch, FormControlLabel } from "@material-ui/core";

const defaultValues = {
  authors: [
    {
      id: 1,
      name: "Alice",
      isActive: true
    },
    {
      id: 2,
      name: "Bob",
      isActive: false
    },
    {
      id: 3,
      name: "Charie",
      isActive: true
    }
  ]
};

type IsActive = `authors.${number}.isActive`

export default function App() {
  const { watch, control } = useForm({ defaultValues: defaultValues });
  const { authors } = watch();
  return (
    <form>
      {authors.map((author, authorIndex) => {
        return (
          <Controller
            key={author.id}
            control={control}
            name={`authors.${authorIndex}.isActive` as IsActive}
            render={({ field: { value, onChange } }) => {
              console.log(value);
              return (
                <FormControlLabel
                  label={author.name}
                  control={<Switch checked={value} onChange={onChange} />}
                />
              );
            }}
          />
        );
      })}
    </form>
  );
}
