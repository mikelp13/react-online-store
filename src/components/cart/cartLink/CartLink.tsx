import { Badge, IconButton } from '@mui/material';
import { blue } from '@mui/material/colors';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CartLinkStyled from './CartLinkStyled';

const CartLink = () => {
  return (
    <CartLinkStyled to="/cart" className="link">
      <span className="cart-text">Cart</span>
      <IconButton size="medium" color="inherit">
        <Badge badgeContent={4} color="error">
          <ShoppingCartIcon sx={{ color: blue[300] }} />
        </Badge>
      </IconButton>
    </CartLinkStyled>
  );
};

export default CartLink;
