import  styled from 'styled-components'

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
`;

const Image= styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Info = styled.div`
    vertical-align: top;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%; 
    display: in;ine-block;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.h1`
    color: orange;
    font-weight: 700px:
    margin-bottom: 20px;
    position: relative;
`;
const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: white;
    color:gray;
    cursor: pointer;
    font-weight: 600;
`;

const CategoryItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Button>SHOP NOW</Button>
        </Info>
    </Container>
  );
};

export default CategoryItem