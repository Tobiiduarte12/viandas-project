import CardLocales from "../../components/CardLocalesWrapper/CardLocales";
import { InfoTittle, LocalesSection } from "./LocalesWrapperStyled";

const LocalesWrapper = () => {
  return (
    <LocalesSection>
      <InfoTittle>Aquí puedes elegir entre tus locales favoritos 😋</InfoTittle>
      <div>
        <CardLocales />
      </div>
    </LocalesSection>
  );
};

export default LocalesWrapper;
