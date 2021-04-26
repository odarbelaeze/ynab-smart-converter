import { FC } from "react";

interface Props {
  headers: string[];
}

const ConfigSelector: FC<Props> = () => {
  return <div className="ConfigSelector">Select your config</div>;
};

export default ConfigSelector;
