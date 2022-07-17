import { styled } from "styled-components"



const Container = styled.div'
    display: flex;
';

const Left = styled.div'
    flex: 1;
';

const Center = styled.div'
    flex: 1;
';

const Right = styled.div'
f   lex: 1;

';


const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo> Shoppie</Logo>
            <Desc>
                Welcome to the shopping world of shoppie. 
            </Desc>
            <SocialContainer>
                <SocialIcon>
                    <Facebook/>
                </SocialIcon>

                <SocialIcon>
                    <Instagram/>
                </SocialIcon>

                <SocialIcon>
                    <Pininterest/>
                </SocialIcon>



            </SocialContainer>
        </Left>
        <Center>

        </Center>
        <Right>

        </Right>


    </Container>
  ); 
}

export default Footer