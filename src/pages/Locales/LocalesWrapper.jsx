import {
	InfoTittle,
	LocalWrapper,
	LocalesSection,
} from "./LocalesWrapperStyled";
import CardLocales from "../../components/CardLocalesWrapper/CardLocales";

import { AllLocales } from "../../data/DataAllLocales";

const LocalesWrapper = () => {
	<LocalesSection>
		<InfoTittle>Aquí puedes elegir entre tus locales favoritos 😋</InfoTittle>
		<LocalWrapper>
			{AllLocales.map((local) => {
				return <CardLocales key={local.id} {...local} />;
			})}
		</LocalWrapper>
	</LocalesSection>;
};

export default LocalesWrapper;
