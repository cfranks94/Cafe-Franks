import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Home() {
  return (
    <main>
      <div className="flex flex-col gap-10 justify-center lg:flex-row">
        <div className='flex flex-col'>
          <Typography variant="h6" gutterBottom>
            Food - 9/15/2023
          </Typography>

          <Card sx={{minWidth: '350px'}}>
            <CardMedia
              component="img"
              alt="restaurant"
              image="/restaurant.jpg"
              sx={{height: 250}}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                True Kitchen
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Relaxed, eco-chic chain serving health-conscious fare, including vegan options, plus cocktails.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">View Website</Button>
            </CardActions>
          </Card>
        </div>
        <div className='flex flex-col'>
          <Typography variant="h6" gutterBottom>
            Event - 9/15/2023
          </Typography>

          <Card sx={{minWidth: '350px'}}>
            <CardMedia
              component="img"
              alt="event"
              image="/event.jpg"
              sx={{height: 250}}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                True Kitchen
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Relaxed, eco-chic chain serving health-conscious fare, including vegan options, plus cocktails.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Details</Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </main>
  )
}
