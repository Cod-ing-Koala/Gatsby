import React from 'react'
import { FaInstagram } from 'react-icons/fa'
import {
    FooterContainer,
    SocialIcon,
    SocialIconLink,
    SocialLogo,
    SocialMedia,
    SocialIcons,
    SocialMediaWrap,
    WebsiteRights
    } from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/'>
                        <SocialIcon/>
                    </SocialLogo>
                    <WebsiteRights>Miguel Cerdá Escobar © {new Date().getFullYear()}</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
                            <FaInstagram/>
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    )
}
export default Footer
