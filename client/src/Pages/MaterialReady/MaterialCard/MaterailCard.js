import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import PostAddIcon from "@mui/icons-material/PostAdd";
import DescriptionIcon from "@mui/icons-material/Description";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";

const MaterialCard = ({ data }) => {
  return (
    <Box
      className="MaterialCard"
      component="main"
      sx={{
        p: 1.2,
      }}
    >
      <div className="card2" style={{ background: "#f3e7e7" }}>
        <div className="card-numberData2">
          <Typography
            sx={{
              fontSize: 14,
              margin: 0,
              fontWeight: "600",
              color: "#5c62a0",
            }}
          >
            PO CREATED TODAY
          </Typography>
        </div>

        <div className="card-nameData2">
          <PostAddIcon sx={{ fontSize: "1.5rem", color: "grey" }} />

          <Typography sx={{ fontSize: 20 }} color="text.secondary">
            1
          </Typography>
        </div>
      </div>

      <div className="card2" style={{ background: "#efebf4" }}>
        <div className="card-numberData2">
          <Typography
            sx={{
              fontSize: 14,
              textAlign: "center",
              fontWeight: "600",
              margin: 0,
              color: "#698590",
            }}
            color="text.secondary"
          >
            PLANNED
          </Typography>
        </div>

        <div className="card-nameData2">
          <DescriptionIcon sx={{ color: "grey", fontSize: "1.5rem" }} />

          <Typography sx={{ fontSize: 20 }} color="text.secondary">
            2
          </Typography>
        </div>
      </div>

      <div className="card2" style={{ background: "#faf1f2" }}>
        <div className="card-numberData2">
          <Typography
            sx={{
              fontSize: 14,
              textAlign: "center",
              fontWeight: "600",
              margin: 0,
              color: "#5c62a0",
            }}
            color="text.secondary"
          >
            PICKED FROM VENDOR
          </Typography>
        </div>

        <div className="card-nameData2">
          <DonutLargeIcon sx={{ color: "grey", fontSize: "1.5rem" }} />

          <Typography sx={{ fontSize: 20 }} color="text.secondary">
            3
          </Typography>
        </div>
      </div>

      <div className="card2" style={{ background: "#f0f3f3" }}>
        <div className="card-numberData2">
          <Typography
            sx={{
              fontSize: 14,
              textAlign: "center",
              fontWeight: "600",
              margin: 0,
              color: "#698590",
            }}
            color="text.secondary"
          >
            CROSSED DOCKED
          </Typography>
        </div>

        <div className="card-nameData2">
          <LocalShippingIcon sx={{ color: "grey", fontSize: "1.5rem" }} />

          <Typography sx={{ fontSize: 20 }} color="text.secondary">
            4
          </Typography>
        </div>
      </div>

      <div className="card2" style={{ background: "#f1eff7" }}>
        <div className="card-numberData2">
          <Typography
            sx={{
              fontSize: 14,
              textAlign: "center",
              fontWeight: "600",
              margin: 0,
              color: "#5c62a0",
            }}
            color="text.secondary"
          >
            DELIVERED
          </Typography>
        </div>

        <div className="card-nameData2">
          <DirectionsBusIcon sx={{ color: "grey", fontSize: "1.5rem" }} />

          <Typography sx={{ fontSize: 20 }} color="text.secondary">
            5
          </Typography>
        </div>
      </div>
    </Box>
  );
};

export default MaterialCard;
