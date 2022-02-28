import React from "react";
import { Link } from "gatsby";
import axios from "axios";

const Index = (props) => {
  // const [code, setCode] = React.useState(null);
  const [accessToken, setAccessToken] = React.useState(null);
  const [refreshToken, setRefreshToken] = React.useState(null);

  const gatGoogleApisCode = () => {
    const params = new URLSearchParams(props.location.search);
    return params.get("code");
  };

  const getToken = async (code) => {
    await axios
      .post("https://oauth2.googleapis.com/token", {
        code: code,
        client_id:
          "754152115553-thmlfop9uvtjf0h086704ifti7h42m8l.apps.googleusercontent.com",
        client_secret: "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",
        redirect_uri: "http://localhost:8000",
        grant_type: "authorization_code",
        approval_prompt: "force",
        access_type: "offline ",
      })
      .then((result) => {
        console.log("refresh", result.data.refresh_token);
        setRefreshToken(result.data.refresh_token);
        setAccessToken(result.data.access_token);
      });
  };

  React.useEffect(async () => {
    const params = new URLSearchParams(props.location.search);
    const code = params.get("code");
    const origin = window.location.origin;
    if (code && !refreshToken) {
      await getToken(code);
      console.log(code);
    } else {
      if (refreshToken !== null) {
        await axios
          .post("https://accounts.google.com/o/oauth2/token", {
            client_id:
              "754152115553-thmlfop9uvtjf0h086704ifti7h42m8l.apps.googleusercontent.com",
            client_secret: "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",
            refresh_token: refreshToken,
            grant_type: "refresh_token",
          })
          .then((result) => {
            console.log(result.data.access_token);
            setAccessToken(result.data.access_token);
          });
      } else {
        console.log("NILL");
        window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=754152115553-thmlfop9uvtjf0h086704ifti7h42m8l.apps.googleusercontent.com&redirect_uri=${origin}&scope=https://www.googleapis.com/auth/drive&approval_prompt=force&access_type=offline`;
      }
    }
  }, []);

  const getData = async () => {
    console.log(accessToken);
    await axios
      .get("https://www.googleapis.com/drive/v3/files", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((result) => console.log("data", result));
  };

  return (
    <>
      hello
      <Link to={"/pages/hoge/"}></Link>
      <button type={"button"} onClick={getData}>
        GETDATA
      </button>
    </>
  );
};
export default Index;
