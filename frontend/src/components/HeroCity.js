import { Card, Grid, Row, Text } from "@nextui-org/react";
import Image1 from "../img/utility/continente.png"
import Image2 from"../img/utility/ciudad.png"
import Image3 from"../img/utility/descripcion.png"
import Image4 from"../img/utility/moneda.png"


export default function HeroCity(props) {
    const city=props.itinerary
    


  
  return (
      <div>
      {city.map((data, _id)=>
        <Grid.Container gap={2} justify="flex-start"  key={data._id}>    
    
              
        <Grid xs={12} sm={4} className="sombra">
        <Card hoverable clickable>
          <Card.Body css={{ p: 0 }}>
            <Card.Image
              objectFit="cover"
              src={Image1}
              width="100%"
              height={140}
              alt={"...."}
            />
          </Card.Body>
          <Card.Footer justify="flex-start">
            <Row wrap="wrap" justify="space-between">
              <Text b>{"Continents"}</Text>
              <Text css={{ color: "$accents4", fontWeight: "$semibold" }}>
                {data.continents}
              </Text>
            </Row>
          </Card.Footer>
        </Card>
      </Grid>
      <Grid xs={12} sm={4} className="sombra">
      <Card hoverable clickable>
        <Card.Body css={{ p: 0 }}>
          <Card.Image
            objectFit="cover"
            src={Image2}
            width="100%"
            height={140}
            alt={"...."}
          />
        </Card.Body>
        <Card.Footer justify="flex-start">
          <Row wrap="wrap" justify="space-between">
            <Text b>{"Country"}</Text>
            <Text css={{ color: "$accents4", fontWeight: "$semibold" }}>
              {data.country}
            </Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
      <Grid xs={12} sm={4} className="sombra">
      <Card hoverable clickable>
        <Card.Body css={{ p: 0 }}>
          <Card.Image
            objectFit="cover"
            src={Image4}
            width="100%"
            height={140}
            alt={"...."}
          />
        </Card.Body>
        <Card.Footer justify="flex-start">
          <Row wrap="wrap" justify="space-between">
            <Text b>{"Currency"}</Text>
            <Text css={{ color: "$accents4", fontWeight: "$semibold" }}>
              {data.currency}
            </Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>  

        
    </Grid.Container>
    
        )}
    </div>
  );
}
