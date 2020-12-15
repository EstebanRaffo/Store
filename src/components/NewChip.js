import Chip from "@material-ui/core/Chip";
import { withStyles } from '@material-ui/core/styles';


const NewChip = withStyles({
    root: {
      backgroundColor: '#0065d1',
      color: 'white',
      fontSize: '110%'
    },
})(Chip);

export default NewChip;