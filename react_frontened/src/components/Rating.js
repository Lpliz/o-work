import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
  
export default function RatingApp() {
  
  const [ratingValue, setRatingValue] = React.useState(0);
  
  return (
    <div style={{ display: 'block', padding: 30 }}>
      <h4>hey! do you like our service ?  </h4>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">
            Please Rate our serviceman
        </Typography>
        <Rating
          name="Rating Label"
          value={ratingValue}
          onChange={(event, newValue) => {
            setRatingValue(newValue);
          }}
        />
      </Box>
    </div>
  );
}