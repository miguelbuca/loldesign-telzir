import React from "react";
import { Box, Button, Card, FieldStack, InputField } from "bumbag";

const Points = () => {
  return (
    <Box>
      <Card standalone>
        <Card.Header>
          <Card.Title>Call overview</Card.Title>
        </Card.Header>
        <Card.Content>
          <Box display={'grid'} gridTemplateColumns={'1fr 1fr 1fr'}>
            <Box>1</Box>
            <Box>2</Box>
            <Box>3</Box>
          </Box>
        </Card.Content>
        <Card.Footer>
          <Button>calulate</Button>
        </Card.Footer>
      </Card>
    </Box>
  );
};

export default Points;
