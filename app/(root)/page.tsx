import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Home() {
  return (
    <main>
      <div className="m-auto flex flex-col gap-10 justify-center lg:flex-row max-w-screen-2xl">
        <div className='flex flex-col lg:w-1/2 hover:brightness-110'>
          <Typography variant="h6" gutterBottom>
            Dining - 9/15/2023
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
              <Typography variant="body2" color="text.secondary" className="h-10">
                Relaxed, eco-chic chain serving health-conscious fare, including vegan options, plus cocktails.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Details</Button>
              <Button size="small">View Website</Button>
            </CardActions>
          </Card>
        </div>
        <div className='flex flex-col lg:w-1/2 hover:brightness-110'>
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
                Event Name
              </Typography>
              <Typography variant="body2" color="text.secondary" className='overflow-hidden text-ellipsis h-10'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur officia facere repellendus quos consectetur, 
                quia odio numquam laudantium ducimus saepe deserunt doloremque, voluptates laborum recusandae. 
                Incidunt reiciendis sapiente facere hic. Pariatur officia facere repellendus quos consectetur, 
                quia odio numquam laudantium ducimus saepe deserunt doloremque, voluptates laborum recusandae. 
                Incidunt reiciendis sapiente facere hic.
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
