import React from "react";
import { Box, Image, Text } from "@skynexui/components";
import appConfig from "../config.json";

export default function PaginaNaoEncontrada() {
  return (
    <>
      <Box
        styleSheet={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: appConfig.theme.colors.neutrals["000"],
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundBlendMode: "multiply",
          backgroundImage: "url(https://i.imgur.com/iIoxyJC.jpg)",
        }}
      >
        <Text
          variant="h1"
          styleSheet={{
            marginTop: "32px",
            fontSize: "24px",
            fontWeight: 600,
            color: appConfig.theme.colors.neutrals["000"],
          }}
        >
          Página não foi encontrada!
        </Text>
      </Box>
    </>
  );
}
