import {
	InfoTittle,
	LocalWrapper,
	LocalesSection,
} from "./LocalesWrapperStyled";

import { AllLocales } from "../../data/DataAllLocales";
import CardLocales from "../../components/CardLocalesWrapper/CardLocales";

const LocalesWrapper = () => {
	return (
		<>
			<LocalesSection>
				<InfoTittle>
					Los mejores locales de viandas en un solo lugar 😋
				</InfoTittle>
				<LocalWrapper>
					{AllLocales.map((local) => {
						return <CardLocales key={local.id} {...local} />;
					})}
				</LocalWrapper>
			</LocalesSection>
		</>
	);
};

export default LocalesWrapper;
