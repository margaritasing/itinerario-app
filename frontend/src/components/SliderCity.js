import { Card, Grid, Row, Text } from "@nextui-org/react";
import { useStateValue } from "../reducer/StateProvider";
import { Link } from "react-router-dom";
import { css, Button } from '@nextui-org/react';



export default function SliderCity() { 
    const [{cities}] = useStateValue(3) 

  return (
      <Grid.Container gap={2} justify="flex-start">          
    {cities.slice(1, 9).map((carrusel, index) =>  
        <Grid xs={12} sm={3} key={index}>
          <Card hoverable clickable>
            <Card.Body css={{ p: 0 }}>
              <Card.Image
                objectFit="cover"
                src={carrusel.image}
                width="100%"
                height={100}
                alt={carrusel.name}
              />
            </Card.Body>
            <Card.Footer justify="flex-start">
              <Row wrap="wrap" justify="space-between">
                <Text b>{carrusel.name}</Text>
                <Text css={{ color: "$accents4", fontWeight: "$semibold" }}>
                  {carrusel.region}
                </Text>
                <Link type="button"  className="btn w-100 text-white" to={"/city/" + carrusel._id}>
                <Button 
                auto 
                css={{ 
                    marginLeft:'70px',
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
