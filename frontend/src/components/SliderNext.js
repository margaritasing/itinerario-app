import { Card, Grid, Row, Text } from "@nextui-org/react";
import { useStateValue } from "../reducer/StateProvider";
import { Link } from "react-router-dom";
import { css, Button } from '@nextui-org/react';



export default function SliderNext() { 
    const [{cities}] = useStateValue(3) 

  return (
      <Grid.Container gap={2} justify="flex-start">     
    {cities.slice(9, 17).map((carrusel, index) =>  
        <Grid xs={6} sm={3} key={index}>
          <Card hoverable clickable>
            <Card.Body css={{ p: 0 }}>
              <Card.Image
                objectFit="cover"
                src={carrusel.image}
                width="100%"
                height={140}
                alt={carrusel.name}
              />
            </Card.Body>
            <Card.Footer justify="flex-start">
              <Row wrap="wrap" justify="space-between">
                <Text b>{carrusel.name}</Text>
                <Text css={{ color: "$accents4", fontWeight: "$semibold" }}>
                  {carrusel.region}
                </Text>
                <Link type="button"  className="btn  mx-5  w-100 mx-3 text-white" to={"/city/" + carrusel._id}>
                <Button 
                auto 
                css={{ 
                    borderRadius: '$xs', // radii.xs
                    border: '$space$1 solid transparent',
                    background: '$red800', // colors.red800
                    color: '$red200',
                    height: '$12', // space[12]
                    boxShadow: '$md', // shadows.md
                    '&:hover': {
                        background: '$red200',
                        color: '$red800',
                    },
                    '&:active': {
                        background: '$red200',
                    },
                    '&:focus': {
                        borderColor: '$red400',
                    },
                }}
                >
                Read More...
                </Button>
                </Link>
              </Row>
            </Card.Footer>
          </Card>
        </Grid>
      )}
    </Grid.Container>
  );
}
