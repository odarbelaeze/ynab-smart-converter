import { FC, useRef, useCallback, useState } from "react";
import Papa from "papaparse";

interface Props {
  onChange: (headers: string[], data: object[]) => void;
}

const CsvLoader: FC<Props> = ({ onChange }) => {
  const fileRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFile = useCallback(() => {
    const file = fileRef?.current?.files?.item(0);
    if (file) {
      const reader = new FileReader();
      reader.addEventListener("load", (e) => {
        const result = Papa.parse(e.target?.result as string, { header: true });
        if (result.errors)
          setError(result.errors.map((e) => e.message).join(";"));
        else onChange(result.meta.fields as string[], result.data as object[]);
      });
      reader.readAsText(file);
    }
  }, [onChange]);

  return (
    <section className="upload">
      {!!error && <p>{error}</p>}
      <input onChange={handleFile} ref={fileRef} type="file" />
    </section>
  );
};

export default CsvLoader;
