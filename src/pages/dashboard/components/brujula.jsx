import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../core/theme/theme";

const Brujula = ({ data }) => {
  console.log("data: ", data);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box width="100%" m="0 35px">
      <Box display="flex" justifyContent="space-between">
        <Box display="flex" alignItems="center">
          <Typography
            top="50vh"
            variant="h5"
            sx={{ color: colors.greenAccent[500] }}
          >
            {"Brujula"}
          </Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: colors.grey[100] }}
          >
            180°
          </Typography>
        </Box>
        <Box display="flex">
          <svg
            version="1.1"
            id="compass"
            xmlns="http://www.w3.org/2000/svg"
            xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="150"
            height="150"
            viewBox="0 0 200 200"
            space="preserve"
            transform={`rotate(100)`}
          >
            <g transform="translate(19 -19)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                fill="white"
                d="M162.312,118.21l-24.773,4.063   c-0.41,7.021-2.08,13.585-4.961,19.679c-2.871,6.094-6.787,11.466-11.581,16.075c-4.717,4.609-10.233,8.359-16.542,11.173   c-6.239,2.891-12.87,4.443-19.988,4.922l-2.881,23.341l-3.906-23.341c-7.509-0.479-14.471-2.031-20.779-4.922   c-6.318-2.813-11.757-6.642-16.386-11.251c-4.638-4.678-8.388-10.147-11.269-16.31c-2.792-6.172-4.472-12.735-4.873-19.835   L0,118.21l24.373-3.115c0.4-7.032,2.08-13.595,4.873-19.679c2.881-6.085,6.63-11.476,11.347-16.085   c4.717-4.61,10.234-8.282,16.542-11.085c6.318-2.725,13.192-4.375,20.545-4.766l3.906-23.966l3.125,23.741   c7.108,0.469,13.749,2.109,19.979,4.912c6.23,2.813,11.747,6.631,16.464,11.241c4.716,4.688,8.554,10.078,11.425,16.163   c2.881,6.162,4.551,12.646,4.961,19.522L162.312,118.21L162.312,118.21z M62.007,73.627c-6.22,3.126-11.581,6.798-15.976,11.017   c-4.482,4.219-8.065,9.141-10.868,14.825L58.901,109l0.879-1.406L46.832,84.409L71.84,96.666l0.566-0.234L62.007,73.627   L62.007,73.627z M58.901,129.372l-0.4-1.016l-23.495,9.142c5.351,12.021,13.974,20.763,25.809,25.997l10.556-22.56l-1.045-0.391   l-23.495,12.169L58.901,129.372L58.901,129.372z M126.992,100.104c-5.204-11.554-13.427-19.991-24.783-25.461l-11.024,22.18   l1.191,0.859l23.338-13.272l-12.47,24.044c0.254,0.234,0.488,0.469,0.645,0.781c0.078,0.234,0.322,0.625,0.566,1.016   L126.992,100.104L126.992,100.104z M90.94,140.779c-0.156,0.078-0.557,0.156-1.191,0.156l11.415,22.56   c11.123-5.156,19.511-13.429,25.184-24.747l-22.693-9.767l-0.645,0.781l12.704,22.951L90.94,140.779L90.94,140.779z M91.34,118.366   c0-2.725-0.879-4.913-2.793-6.71c-1.835-1.719-4.159-2.656-6.962-2.656c-2.871,0-5.341,0.938-7.343,2.656   c-2.08,1.797-3.037,3.985-3.037,6.71c0,2.891,0.957,5.313,3.037,7.412c2.002,2.109,4.472,3.203,7.343,3.203   c2.803,0,5.127-1.094,6.962-3.203C90.461,123.679,91.34,121.257,91.34,118.366L91.34,118.366z M101.574,74.018   c-2.479-0.928-5.038-1.719-7.675-2.412c-2.637-0.625-5.352-1.172-8.153-1.416l3.759,26.008c0,0.313,0.244,0.469,0.801,0.469   L101.574,74.018L101.574,74.018z M57.701,126.716l-26.854-4.053c0.557,5.303,1.914,10.147,4.16,14.601l23.25-9.298L57.701,126.716   L57.701,126.716z M76.791,167.792l-4.15-26.466l-0.645-0.391l-10.624,22.95c1.68,1.094,4.003,1.953,6.875,2.578   C71.206,167.089,73.998,167.479,76.791,167.792L76.791,167.792z M35.007,100.104c-2.402,5.693-3.759,10.381-4.16,14.21l27.41-3.673   l0.244-0.625L35.007,100.104L35.007,100.104z M88.87,141.795l-3.524,25.997c2.479-0.313,5.038-0.703,7.597-1.328   s5.029-1.484,7.353-2.578l-10.79-22.56C89.504,141.639,89.26,141.795,88.87,141.795L88.87,141.795z M130.498,123.444l-26.043,3.896   l-0.166,0.781l22.059,9.767c1.113-2.422,1.992-4.844,2.559-7.188C129.541,128.278,130.107,125.856,130.498,123.444L130.498,123.444   z M76.791,70.189c-2.793,0.244-5.195,0.635-7.343,1.104c-2.158,0.469-4.395,1.162-6.796,1.943l10.233,22.961L76.791,70.189   L76.791,70.189z M130.498,114.313c-0.322-2.579-0.635-4.923-1.123-7.032c-0.469-2.109-1.191-4.297-1.992-6.563l-22.459,9.922   L130.498,114.313L130.498,114.313z M131.298,98.229c-2.471-6.095-6.151-11.554-11.024-16.319   c-4.795-4.844-10.155-8.751-15.985-11.72l-1.279,2.666c11.825,6.241,20.458,15.069,26.053,26.613L131.298,98.229L131.298,98.229z    M61.216,71.439l-1.279-1.865c-6.64,2.412-12.392,6.084-17.264,10.851C37.8,85.269,34.05,90.972,31.248,97.682l2.714,1.006   C39.079,86.206,48.189,77.144,61.216,71.439L61.216,71.439z M128.183,139.529c-6.474,12.179-15.35,20.685-26.609,25.372l1.27,2.5   c12.704-6.016,22.06-14.834,28.055-26.622L128.183,139.529L128.183,139.529z M58.745,167.167l1.426-2.422   c-5.986-2.422-11.259-5.859-15.897-10.303c-4.717-4.376-8.154-9.679-10.556-15.929l-2.714,0.781   C36.677,152.177,45.953,161.464,58.745,167.167L58.745,167.167z M81.996,107.203c1.279,0.234,2.549,0.703,3.838,1.25   c1.348,0.469,2.313,1.094,3.036,1.797l5.029-4.922c-1.992-1.719-3.828-2.891-5.674-3.516c-1.757-0.625-3.837-1.016-6.229-1.094   V107.203L81.996,107.203z M80.794,100.719c-4.472,0.234-8.388,2.031-11.913,5.469l4.794,4.063c1.279-1.094,2.402-1.797,3.369-2.109   c0.957-0.391,2.148-0.703,3.75-0.938V100.719L80.794,100.719z M99.739,117.985c-0.322-2.344-0.811-4.376-1.523-6.173   c-0.635-1.875-1.836-3.75-3.516-5.625l-4.951,4.453c2.158,2.188,3.271,4.61,3.271,7.345H99.739L99.739,117.985z M99.739,119.382   H93.02c-0.234,1.641-0.479,2.891-0.723,3.896c-0.156,0.947-0.879,1.963-1.992,3.047l4.15,4.453   C97.415,127.966,99.172,124.147,99.739,119.382L99.739,119.382z M63.296,119.382c0.156,2.188,0.635,4.297,1.435,6.318   c0.879,2.031,2.07,3.828,3.76,5.469l4.15-4.453c-1.123-1.084-1.835-2.266-2.314-3.584c-0.4-1.25-0.566-2.5-0.566-3.75H63.296   L63.296,119.382z M81.996,136.248c2.393,0,4.385-0.391,6.151-1.172c1.758-0.859,3.594-2.031,5.518-3.516l-4.16-4.454   c-1.123,0.703-2.079,1.328-2.792,1.875c-0.801,0.469-2.324,1.016-4.717,1.406V136.248L81.996,136.248z M80.794,130.388   c-3.115,0-5.429-1.016-7.119-3.047l-4.384,4.454c1.67,1.328,3.427,2.422,5.195,3.281c1.836,0.781,3.906,1.172,6.308,1.172V130.388   L80.794,130.388z M69.76,117.985c0-2.734,0.957-5.157,2.88-7.345l-4.56-3.828c-1.436,1.719-2.471,3.438-3.35,5.156   c-0.8,1.719-1.279,3.673-1.435,6.017H69.76L69.76,117.985z M135.458,122.663l-3.125,0.615c-0.078,2.666-0.557,5.313-1.191,7.813   c-0.723,2.501-1.602,5.079-2.725,7.813l2.48,1.25C133.701,134.451,135.214,128.591,135.458,122.663L135.458,122.663z    M84.955,66.137l0.391,2.422c2.88,0.156,5.751,0.625,8.632,1.406c2.871,0.859,5.674,1.709,8.397,2.646l1.279-2.646   c-3.037-0.938-6.151-1.797-9.276-2.5C91.262,66.693,88.147,66.293,84.955,66.137L84.955,66.137z M76.791,169.043   c-5.273-0.548-10.625-1.954-15.976-4.142l-1.035,2.5c4.717,2.579,10.546,4.063,17.421,4.454L76.791,169.043L76.791,169.043z    M85.345,169.043l-0.635,2.813c3.202-0.156,6.151-0.547,8.876-1.328c2.705-0.781,5.43-1.72,8.222-2.97l-0.645-2.422   C96.135,167.479,90.862,168.729,85.345,169.043L85.345,169.043z M135.458,114.704c-0.088-2.657-0.557-5.313-1.201-7.892   c-0.723-2.578-1.592-5.234-2.715-7.959l-2.08,1.25c0.713,2.256,1.279,4.678,1.836,7.178c0.566,2.5,0.957,4.922,1.035,7.267   L135.458,114.704L135.458,114.704z M33.483,137.498c-1.601-3.281-2.636-5.859-2.949-7.735c-0.41-1.875-0.732-4.287-0.967-7.1   l-3.115-0.625c0.244,2.969,0.8,5.771,1.513,8.428c0.801,2.657,1.758,5.392,2.881,8.282L33.483,137.498L33.483,137.498z    M26.453,114.704l3.115-0.156c0.234-3.126,0.723-5.86,1.357-8.282c0.635-2.344,1.514-4.609,2.558-6.797l-2.48-1.24   C28.767,103.531,27.253,109,26.453,114.704L26.453,114.704z M77.201,66.137c-2.715,0.156-5.518,0.391-8.232,0.781   c-2.637,0.469-5.439,1.172-8.154,2.266l0.801,2.031c2.393-0.703,4.794-1.25,7.353-1.797c2.626-0.547,5.273-0.938,8.076-1.016   L77.201,66.137z"
              />
              <text
                transform="matrix(1 0 0 1 77 37)"
                fill="#b8decf"
                fontFamily="Arial Black"
                fontSize="20"
              >
                N
              </text>
            </g>
          </svg>
        </Box>
      </Box>
    </Box>
  );
};

export default Brujula;
