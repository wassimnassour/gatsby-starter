import React from "react";
import { SocialLinks } from "../../constants/contactIcons";
import { FooterContainer, SocialMediaWrapper, Rights } from "./footer.style";

const Footer = () => {
	return (
		<FooterContainer>
			<SocialMediaWrapper>{SocialLinks}</SocialMediaWrapper>
			<Rights>
				© Copyright {new Date().getFullYear()}. All rights reserved
			</Rights>
		</FooterContainer>
	);
};

export default Footer;
