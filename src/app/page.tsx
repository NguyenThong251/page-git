"use client";
import Hero from "@/components/hero/page";
import BadgeTitle from "@/components/ui/BadgeTitle";
import ButtonLink from "@/components/ui/ButtonLink";
import VideoComponent from "@/components/ui/VideoComponent ";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import BannerTwo from "../images/features-bento-1-cli-ga.webp";
import IdeSvg from "../images/features-bento-2-jetbrains.svg";
import Apple from "../images/features-bento-4-apple.png";
import Google from "../images/features-bento-4-google.png";
import BannerOne from "../images/features-bento-5.webp";
import GitX from "../images/git-x.png";
import IconPhone from "../images/icon.png";
import Framer from "../images/logo-framer.svg";
import Quote from "../images/quote.svg";
import TableList from "@/components/table/page";
import Footer from "@/components/footer/footer-primary/page";

export default function Home() {
  return (
    <>
      <Container>
        <Hero />
        <Box>
          <Container sx={{ padding: 10 }} maxWidth="xl">
            <BadgeTitle title="Enterprise-ready" />
            <Typography
              component="h1"
              sx={{
                marginTop: 5,
                fontWeight: 700,
                fontSize: 64,
                lineHeight: 1,
                color: "secondary.main",
              }}
            >
              The competitive advantage developers ask for by name.
            </Typography>
            <Box marginTop={5}>
              <Grid container spacing={4}>
                <Grid item xs={7}>
                  <Box
                    height={500}
                    sx={{
                      backgroundColor: "#6357d7",
                      padding: 6,
                      borderRadius: 5,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box
                      sx={{
                        fontSize: "3rem",
                        fontWeight: 600,
                        textAlign: "left",
                        color: "white",
                        lineHeight: "1.2",
                      }}
                    >
                      Committed to your privacy, security, and trust.
                    </Box>

                    <ButtonLink title="Visit the GitHub Copilot Trust Center" />
                  </Box>
                </Grid>
                <Grid item xs={5}>
                  <Box
                    height={500}
                    sx={{
                      backgroundColor: "#0b0420",
                      padding: 6,
                      borderRadius: 5,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <Image src={GitX} alt="git-x" width={120} height={120} />
                    <Box sx={{ color: "white" }}>
                      <Typography
                        component="div"
                        sx={{
                          fontSize: "80px",
                          fontWeight: 500,
                          lineHeight: 1,
                        }}
                      >
                        55%
                        <Typography
                          component="span"
                          sx={{ fontSize: "24px", fontWeight: 500 }}
                        >
                          Faster coding
                        </Typography>
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={5}>
                  <Box
                    height={500}
                    sx={{
                      backgroundColor: "#0b0420",
                      padding: 6,
                      borderRadius: 5,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <Image src={GitX} alt="git-x" width={120} height={120} />
                    <Box sx={{ color: "white" }}>
                      <Typography
                        component="div"
                        sx={{
                          fontSize: "36px",
                          fontWeight: 600,
                          lineHeight: 1,
                        }}
                      >
                        Designed by leaders in AI so you can build with
                        confidence.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={7}>
                  <Box
                    height={500}
                    sx={{
                      backgroundColor: "#6a12f2",
                      padding: 6,
                      borderRadius: 5,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box
                      sx={{
                        fontSize: "3rem",
                        fontWeight: 600,
                        textAlign: "left",
                        color: "white",
                        lineHeight: "1.2",
                      }}
                    >
                      Proven to increase developer productivity and accelerate
                      the pace of software development.
                    </Box>

                    <ButtonLink title="Read the search" />
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box
                    height={650}
                    sx={{
                      backgroundColor: "#010409",
                      padding: 6,
                      borderRadius: 5,
                    }}
                  >
                    <Grid container spacing={3}>
                      <Grid item xs={6}>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 3,
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: "2.3rem",
                              fontWeight: 600,
                              textAlign: "left",
                              color: "white",
                              lineHeight: "1.1",
                            }}
                          >
                            GitHub Copilot is a revolutionary AI that helps
                            developers write, debug, and collaborate more
                            efficiently.
                          </Typography>
                          <ButtonLink title="Read customer story" />
                        </Box>
                        <Box sx={{ marginTop: "4rem" }}>
                          <Grid container spacing={3}>
                            <Grid item xs={6}>
                              <Box
                                sx={{
                                  color: "white",
                                  padding: 4,
                                  border: "1px solid white",

                                  borderRadius: 5,
                                }}
                              >
                                <Typography
                                  sx={{ fontSize: "48px", fontWeight: 600 }}
                                >
                                  ~25%
                                </Typography>
                                <Typography
                                  sx={{ color: "#687078", fontWeight: 550 }}
                                >
                                  increase in developer speed with GitHub
                                  Copilot
                                </Typography>
                              </Box>
                            </Grid>
                            <Grid item xs={6}>
                              <Box
                                sx={{
                                  color: "white",
                                  padding: 4,
                                  border: "1px solid white",

                                  borderRadius: 5,
                                }}
                              >
                                <Typography
                                  sx={{ fontSize: "48px", fontWeight: 600 }}
                                >
                                  ~25%
                                </Typography>
                                <Typography
                                  sx={{ color: "#687078", fontWeight: 550 }}
                                >
                                  increase in developer speed with GitHub
                                  Copilot
                                </Typography>
                              </Box>
                            </Grid>
                          </Grid>
                        </Box>
                      </Grid>
                      <Grid item xs={6}>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 3,
                          }}
                        >
                          <Box
                            sx={{
                              position: "relative",
                              color: "white",
                              paddingLeft: "1.5rem",
                              paddingBottom: "2rem",

                              "&::before": {
                                content: '""',
                                position: "absolute",
                                width: "0.5rem",
                                height: "0.5rem",
                                top: "calc( 0.5rem / 2 - 0.5rem / 2 + 0.5rem )",
                                left: 0,
                                borderStyle: "solid",
                                borderWidth: "0.125rem",
                                borderColor: "#6e7681",
                                borderRadius: "10px",
                              },
                              "&::after": {
                                content: '""',
                                position: "absolute",
                                width: "0.125rem",
                                height: "10rem",
                                left: "calc(0.5rem / 2 - 0.125rem / 2)",
                                top: "1.2rem",
                                backgroundColor: "#6e7681",
                              },
                            }}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: 3,
                              }}
                            >
                              <Typography
                                sx={{ fontSize: "18px", fontWeight: 550 }}
                              >
                                Problem
                              </Typography>
                              <Typography
                                sx={{ color: "#858e97", fontWeight: 500 }}
                              >
                                Inconsistent standards and workflows limited
                                developer mobility and efficiency, limiting
                                Duolingo’s ability to expand its content and
                                deliver on its core mission.
                              </Typography>
                            </Box>
                          </Box>
                          <Box
                            sx={{
                              position: "relative",
                              color: "white",
                              paddingLeft: "1.5rem",
                              paddingBottom: "2rem",

                              "&::before": {
                                content: '""',
                                position: "absolute",
                                width: "0.5rem",
                                height: "0.5rem",
                                top: "calc( 0.5rem / 2 - 0.5rem / 2 + 0.5rem )",
                                left: 0,
                                borderStyle: "solid",
                                borderWidth: "0.125rem",
                                borderColor: "#6e7681",
                                borderRadius: "10px",
                              },
                              "&::after": {
                                content: '""',
                                position: "absolute",
                                width: "0.125rem",
                                height: "10rem",
                                left: "calc(0.5rem / 2 - 0.125rem / 2)",
                                top: "1.2rem",
                                backgroundColor: "#6e7681",
                              },
                            }}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: 3,
                              }}
                            >
                              <Typography
                                sx={{ fontSize: "18px", fontWeight: 550 }}
                              >
                                Problem
                              </Typography>
                              <Typography
                                sx={{ color: "#858e97", fontWeight: 500 }}
                              >
                                Inconsistent standards and workflows limited
                                developer mobility and efficiency, limiting
                                Duolingo’s ability to expand its content and
                                deliver on its core mission.
                              </Typography>
                            </Box>
                          </Box>
                          <Box
                            sx={{
                              position: "relative",
                              color: "white",
                              paddingLeft: "1.5rem",
                              paddingBottom: "2rem",

                              "&::before": {
                                content: '""',
                                position: "absolute",
                                width: "0.5rem",
                                height: "0.5rem",
                                top: "calc( 0.5rem / 2 - 0.5rem / 2 + 0.5rem )",
                                left: 0,
                                borderStyle: "solid",
                                borderWidth: "0.125rem",
                                borderColor: "#6e7681",
                                borderRadius: "10px",
                              },
                              "&::after": {
                                content: '""',
                                position: "absolute",
                                width: "0.125rem",
                                height: "10rem",
                                left: "calc(0.5rem / 2 - 0.125rem / 2)",
                                top: "1.5rem",
                                backgroundColor: "#6e7681",
                              },
                            }}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: 3,
                              }}
                            >
                              <Typography
                                sx={{ fontSize: "18px", fontWeight: 550 }}
                              >
                                Problem
                              </Typography>
                              <Typography
                                sx={{ color: "#858e97", fontWeight: 500 }}
                              >
                                Inconsistent standards and workflows limited
                                developer mobility and efficiency, limiting
                                Duolingo’s ability to expand its content and
                                deliver on its core mission.
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>
        <Box>
          <Container sx={{ paddingBottom: 10 }} maxWidth="xl">
            <Typography
              component="h1"
              sx={{
                marginTop: 5,
                fontWeight: 700,
                fontSize: 48,
                lineHeight: 1,
                color: "secondary.main",
              }}
            >
              The industry standard.
            </Typography>
            <Box sx={{ paddingY: 10 }}>
              <Grid container spacing={3}>
                <Grid item xs={4}>
                  <Box
                    sx={{
                      color: "white",
                      padding: 6,
                      backgroundColor: "#090b0e",
                      borderRadius: 5,
                    }}
                    height={350}
                  >
                    <Typography sx={{ fontSize: "58px", fontWeight: 550 }}>
                      50,000+
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "24px",
                        color: "#687078",
                        fontWeight: 500,
                        lineHeight: 1.2,
                      }}
                    >
                      Businesses have adopted GitHub Copilot
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Box
                    sx={{
                      color: "white",
                      padding: 6,
                      backgroundColor: "#090b0e",
                      borderRadius: 5,
                    }}
                    height={350}
                  >
                    <Typography sx={{ fontSize: "58px", fontWeight: 550 }}>
                      1 in 3
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "24px",
                        color: "#687078",
                        fontWeight: 500,
                        lineHeight: 1.2,
                      }}
                    >
                      Fortune 500 companies use GitHub Copilot
                    </Typography>
                    <Typography
                      sx={{
                        marginTop: "2rem",
                        fontSize: "16px",
                        color: "#687078",
                      }}
                    >
                      Available for business since Dec 2022
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Box
                    sx={{
                      color: "white",
                      padding: 6,
                      backgroundColor: "#090b0e",
                      borderRadius: 5,
                    }}
                    height={350}
                  >
                    <Typography sx={{ fontSize: "58px", fontWeight: 550 }}>
                      1 in 3
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "24px",
                        color: "#687078",
                        fontWeight: 500,
                        lineHeight: 1.2,
                      }}
                    >
                      Fortune 500 companies use GitHub Copilot
                    </Typography>
                    <Typography
                      sx={{
                        marginTop: "2rem",
                        fontSize: "16px",
                        color: "#687078",
                      }}
                    >
                      Available for business since Dec 2022
                    </Typography>
                  </Box>
                </Grid>

                <Grid item xs={12}>
                  <Box
                    sx={{
                      color: "white",
                      padding: 6,
                      backgroundColor: "#090b0e",
                      borderRadius: 5,
                    }}
                    height={450}
                  >
                    <Image src={Quote} alt="framer" />
                    <Typography
                      sx={{
                        fontSize: "36px",
                        fontWeight: 550,
                        lineHeight: 1.2,
                        marginTop: 4,
                      }}
                    >
                      Personalized, natural language recommendations are now at
                      the fingertips of all our developers at Figma. Our
                      engineers are coding faster, collaborating more
                      effectively, and building better outcomes.
                    </Typography>
                    <Box sx={{ display: "flex", marginTop: "3rem", gap: 3 }}>
                      <Image src={Framer} alt="framer" />
                      <Box>
                        <Typography
                          sx={{
                            fontSize: "24px",
                            fontWeight: 500,
                            lineHeight: 1.2,
                          }}
                        >
                          Figma
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "16px",
                            color: "#687078",
                          }}
                        >
                          Engineering Manager for Infrastructure @ Figma
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>
        <Box>
          <Container sx={{ paddingBottom: 10 }} maxWidth="xl">
            <BadgeTitle title="Fectues" />
            <Typography
              component="h1"
              sx={{
                marginTop: 5,
                fontWeight: 700,
                fontSize: 64,
                lineHeight: 1,
                color: "secondary.main",
              }}
            >
              The AI coding assistant elevating developer workflows.
            </Typography>
            <Box marginTop={5}>
              <VideoComponent path="https://github.com/images/modules/site/copilot/features-breakout.mp4" />
              <Grid container spacing={2} sx={{ marginY: 5 }}>
                <Grid item xs={8}>
                  <Typography
                    sx={{
                      color: "secondary.main",
                      fontSize: "h4.fontSize",
                      fontWeight: "550",
                    }}
                  >
                    Start a conversation about your codebase.
                  </Typography>
                  <Typography
                    sx={{
                      color: "#6a737d",
                      fontSize: "h4.fontSize",
                      fontWeight: "500",
                      lineHeight: 1.2,
                      marginBottom: 8,
                    }}
                  >
                    Whether you’re hunting down a bug or designing a new
                    feature—when you’re stuck, ask GitHub Copilot.
                  </Typography>
                  <ButtonLink title="Read about use cases for GitHub Copilot Chat" />
                </Grid>
                <Grid item xs={4}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 1,
                    }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        color: "white",
                        paddingLeft: "1.5rem",
                        paddingBottom: "2rem",

                        "&::before": {
                          content: '""',
                          position: "absolute",
                          width: "0.5rem",
                          height: "0.5rem",
                          top: "calc( 0.5rem / 2 - 0.5rem / 2 + 0.5rem )",
                          left: 0,
                          borderStyle: "solid",
                          borderWidth: "0.125rem",
                          borderColor: "#6e7681",
                          borderRadius: "10px",
                        },
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          width: "0.125rem",
                          height: "10rem",
                          left: "calc(0.5rem / 2 - 0.125rem / 2)",
                          top: "1.5rem",
                          backgroundColor: "#6e7681",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 3,
                        }}
                      >
                        <Typography sx={{ fontSize: "18px", fontWeight: 550 }}>
                          Problem
                        </Typography>
                        <Typography sx={{ color: "#858e97", fontWeight: 500 }}>
                          Inconsistent standards and workflows limited developer
                          mobility and efficiency, limiting Duolingo’s ability
                          to expand its content and deliver on its core mission.
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        position: "relative",
                        color: "white",
                        paddingLeft: "1.5rem",
                        paddingBottom: "2rem",

                        "&::before": {
                          content: '""',
                          position: "absolute",
                          width: "0.5rem",
                          height: "0.5rem",
                          top: "calc( 0.5rem / 2 - 0.5rem / 2 + 0.5rem )",
                          left: 0,
                          borderStyle: "solid",
                          borderWidth: "0.125rem",
                          borderColor: "#6e7681",
                          borderRadius: "10px",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 3,
                        }}
                      >
                        <Typography sx={{ fontSize: "18px", fontWeight: 550 }}>
                          Problem
                        </Typography>
                        <Typography sx={{ color: "#858e97", fontWeight: 500 }}>
                          Inconsistent standards and workflows limited developer
                          mobility and efficiency, limiting Duolingo’s ability
                          to expand its content and deliver on its core mission.
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item xs={5}>
                    <Typography
                      sx={{
                        marginTop: 20,
                        color: "secondary.main",
                        fontSize: "h4.fontSize",
                        fontWeight: "550",
                      }}
                    >
                      Get AI-based suggestions in real time
                    </Typography>
                    <Typography
                      sx={{
                        color: "#6a737d",
                        fontSize: "h6.fontSize",
                        fontWeight: "500",
                        lineHeight: 1.2,
                        marginBottom: 2,
                      }}
                    >
                      GitHub Copilot suggests code completions as developers
                      type and turns natural language prompts into coding
                      suggestions based on the context and style conventions.
                    </Typography>
                    <ButtonLink title="Read the docs" />
                  </Grid>
                  <Grid item xs={7}>
                    <VideoComponent path="https://github.com/images/modules/site/copilot/features-river-1.mp4" />
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid marginTop={20} item xs={5}>
                    <BadgeTitle title="Available for Copilot Enterprise" />
                    <Typography
                      sx={{
                        marginTop: 2,
                        color: "secondary.main",
                        fontSize: "h4.fontSize",
                        fontWeight: "550",
                        lineHeight: 1.2,
                      }}
                    >
                      Get AI-based suggestions in real time
                    </Typography>
                    <Typography
                      sx={{
                        marginTop: 2,
                        width: "90%",
                        color: "#6a737d",
                        fontSize: "h7.fontSize",
                        fontWeight: "500",
                        lineHeight: 1.2,
                        marginBottom: 2,
                      }}
                    >
                      GitHub Copilot suggests code completions as developers
                      type and turns natural language prompts into coding
                      suggestions based on the context and style conventions.
                    </Typography>
                    <ButtonLink title="Read the docs" />
                  </Grid>
                  <Grid item xs={7}>
                    <VideoComponent path="https://github.com/images/modules/site/copilot/features-river-2.mp4" />
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid marginTop={20} item xs={5}>
                    <BadgeTitle title="Pull requests that tell a story." />
                    <Typography
                      sx={{
                        marginTop: 2,
                        color: "secondary.main",
                        fontSize: "h4.fontSize",
                        fontWeight: "550",
                        lineHeight: 1.2,
                      }}
                    >
                      Pull requests that tell a story.
                    </Typography>
                    <Typography
                      sx={{
                        marginTop: 2,
                        width: "90%",
                        color: "#6a737d",
                        fontSize: "h7.fontSize",
                        fontWeight: "500",
                        lineHeight: 1.2,
                        marginBottom: 2,
                      }}
                    >
                      GitHub Copilot keeps track of your work, suggests
                      descriptions, and helps reviewers reason about your
                      changes.
                    </Typography>
                    <ButtonLink title="Read the docs" />
                  </Grid>
                  <Grid item xs={7}>
                    <VideoComponent path="https://github.com/images/modules/site/copilot/features-river-3.mp4" />
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid marginTop={20} item xs={5}>
                    <BadgeTitle title="Limited Beta" />
                    <Typography
                      sx={{
                        marginTop: 2,
                        color: "secondary.main",
                        fontSize: "h4.fontSize",
                        fontWeight: "550",
                        lineHeight: 1.2,
                      }}
                    >
                      Pull requests that tell a story.
                    </Typography>
                    <Typography
                      sx={{
                        marginTop: 2,
                        width: "90%",
                        color: "#6a737d",
                        fontSize: "h7.fontSize",
                        fontWeight: "500",
                        lineHeight: 1.2,
                        marginBottom: 2,
                      }}
                    >
                      Check log errors, create feature flags, deploy apps to the
                      cloud. Add capabilities to GitHub Copilot with an
                      ecosystem of extensions from third-party tools and
                      services.
                    </Typography>
                    <ButtonLink title="Read the docs" />
                  </Grid>
                  <Grid item xs={7}>
                    <VideoComponent path="https://github.com/images/modules/site/copilot/features-river-4.mp4" />
                  </Grid>
                </Grid>
                <Grid container>
                  <Box
                    sx={{
                      borderRadius: "10px",
                      overflow: "hidden",
                      marginTop: 10,
                      position: "relative",
                    }}
                  >
                    <Image src={BannerOne} alt="banner" />
                    <Box sx={{ position: "absolute", top: 50, left: 50 }}>
                      <BadgeTitle title="Coming soon as an add-on" />
                      <Typography
                        sx={{
                          fontSize: "h4.fontSize",
                          width: "45%",
                          lineHeight: 1.2,
                          marginTop: "10px",
                          color: "white",
                        }}
                      >
                        Prefer bespoke? Fine-tune a private, custom model that
                        suggests code based on the best practices and patterns
                        in your repositories.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid marginTop={5} container spacing={4}>
                  <Grid item xs={7}>
                    <Box
                      sx={{
                        borderRadius: "10px",
                        overflow: "hidden",
                        position: "relative",
                      }}
                    >
                      <Image src={BannerTwo} alt="banner" />
                      <Box
                        sx={{
                          top: 50,
                          left: 50,
                          position: "absolute",
                        }}
                      >
                        <Typography
                          sx={{
                            marginTop: 2,
                            color: "secondary.main",
                            fontSize: "h4.fontSize",
                            fontWeight: "550",
                            lineHeight: 1.2,
                            marginBottom: "10px",
                          }}
                        >
                          Ask for assistance right in your terminal.
                        </Typography>
                        <ButtonLink title="Try Copilot in the CLI" />
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={5}>
                    <Box
                      sx={{
                        backgroundColor: "#0d1117",
                        height: "100%",
                        borderRadius: "10px",
                        padding: 6,
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "h4.fontSize",
                          textAlign: "center",
                          fontWeight: "bold",
                          lineHeight: 1.2,
                          marginTop: "10px",
                          color: "white",
                        }}
                      >
                        Keep flying with your favorite editor.
                      </Typography>
                      <Grid sx={{ marginTop: 1 }} container spacing={3}>
                        <Grid item xs={6}>
                          <Box
                            sx={{
                              padding: 2,
                              border: "0.5px solid #cccccc54",
                              display: "flex",
                              justifyContent: "center",
                              alignContent: "center",
                              textAlign: "center",
                              borderRadius: "10px",
                              gap: "10px",
                              flexDirection: "column",
                              backgroundColor: "#202328",
                            }}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignContent: "center",
                              }}
                            >
                              <Image src={IdeSvg} alt="ide" />
                            </Box>
                            <Typography sx={{ color: "white" }}>
                              VS Code
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={6}>
                          <Box
                            sx={{
                              padding: 2,
                              border: "0.5px solid #cccccc54",
                              display: "flex",
                              justifyContent: "center",
                              alignContent: "center",
                              textAlign: "center",
                              borderRadius: "10px",
                              gap: "10px",
                              flexDirection: "column",
                              backgroundColor: "#202328",
                            }}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignContent: "center",
                              }}
                            >
                              <Image src={IdeSvg} alt="ide" />
                            </Box>
                            <Typography sx={{ color: "white" }}>
                              VS Code
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={6}>
                          <Box
                            sx={{
                              padding: 2,
                              border: "0.5px solid #cccccc54",
                              display: "flex",
                              justifyContent: "center",
                              alignContent: "center",
                              textAlign: "center",
                              borderRadius: "10px",
                              gap: "10px",
                              flexDirection: "column",
                              backgroundColor: "#202328",
                            }}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignContent: "center",
                              }}
                            >
                              <Image src={IdeSvg} alt="ide" />
                            </Box>
                            <Typography sx={{ color: "white" }}>
                              VS Code
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={6}>
                          <Box
                            sx={{
                              padding: 2,
                              border: "0.5px solid #cccccc54",
                              display: "flex",
                              justifyContent: "center",
                              alignContent: "center",
                              textAlign: "center",
                              borderRadius: "10px",
                              gap: "10px",
                              flexDirection: "column",
                              backgroundColor: "#202328",
                            }}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignContent: "center",
                              }}
                            >
                              <Image src={IdeSvg} alt="ide" />
                            </Box>
                            <Typography sx={{ color: "white" }}>
                              VS Code
                            </Typography>
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>
                  </Grid>
                </Grid>
                <Grid marginTop={5} container spacing={4}>
                  <Grid item xs={5}>
                    <Box
                      sx={{
                        backgroundColor: "#0d1117",
                        height: "100%",
                        borderRadius: "10px",
                        padding: 6,
                      }}
                    >
                      <Image width={100} src={IconPhone} alt="Iconphone" />
                      <Typography
                        sx={{
                          fontSize: "h4.fontSize",
                          textAlign: "center",
                          fontWeight: "bold",
                          lineHeight: 1.2,
                          marginTop: "10px",
                          color: "white",
                        }}
                      >
                        Now Available: Chat with your favorite AI pair
                        programmer on the go.
                      </Typography>
                      <Grid sx={{ marginTop: 10 }} container spacing={3}>
                        <Grid item xs={6}>
                          <Image src={Google} alt="google" />
                        </Grid>
                        <Grid item xs={6}>
                          <Image src={Apple} alt="google" />
                        </Grid>
                      </Grid>
                    </Box>
                  </Grid>
                  <Grid item xs={7}>
                    <Box
                      sx={{
                        borderRadius: "10px",
                        overflow: "hidden",
                        position: "relative",
                      }}
                    >
                      <Image src={BannerTwo} alt="banner" />
                      <Box
                        sx={{
                          top: 50,
                          left: 50,
                          position: "absolute",
                        }}
                      >
                        <Typography
                          sx={{
                            marginTop: 2,
                            color: "secondary.main",
                            fontSize: "h4.fontSize",
                            fontWeight: "550",
                            lineHeight: 1.2,
                            marginBottom: "10px",
                          }}
                        >
                          Ask for assistance right in your terminal.
                        </Typography>
                        <ButtonLink title="Try Copilot in the CLI" />
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>
        <Box>
          <Container sx={{ paddingBottom: 10 }} maxWidth="xl">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                gap: 3,
                justifyContent: "center",
              }}
            >
              <BadgeTitle title="Pricing" />
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: 64,
                  lineHeight: 1,
                  color: "secondary.main",
                }}
              >
                Take flight with GitHub Copilot.
              </Typography>
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: "16px",

                  width: "50%",
                  lineHeight: 1.5,
                  textAlign: "center",
                  color: "#7a8292",
                }}
              >
                Organizations and developers all over the world use GitHub
                Copilot to code faster, drive impact, and focus on doing what
                matters most: building great software.
              </Typography>
            </Box>
            <Grid marginTop={2} container spacing={3}>
              <Grid item xs={4}>
                <Card
                  sx={{
                    height: "100%",
                    padding: 3,
                    border: "0.5px solid #ffffff1e",
                    borderRadius: "20px",
                    backgroundColor: "#251a57",
                  }}
                >
                  <CardContent sx={{ textAlign: "center" }}>
                    <Typography
                      gutterBottom
                      variant="h4"
                      sx={{ fontWeight: 600, color: "white" }}
                      component="div"
                    >
                      Copilot Individual
                    </Typography>
                    <Typography
                      variant="body2"
                      color="#676b7d"
                      fontWeight={500}
                    >
                      For individual developers, freelancers, students, and
                      educators that want to code faster and happier.
                    </Typography>
                  </CardContent>
                  <CardContent sx={{ textAlign: "center", marginTop: 1 }}>
                    <Typography
                      gutterBottom
                      variant="h3"
                      sx={{ fontWeight: 500, color: "white" }}
                      component="div"
                    >
                      $ 10 USD
                    </Typography>
                    <Typography
                      sx={{ margonBottom: 0 }}
                      variant="body2"
                      color="#676b7d"
                      fontWeight={500}
                    >
                      per month / $100 USD per year
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      sx={{
                        backgroundColor: "white",
                        width: "100%",
                        fontWeight: "550",
                        paddingY: 1,
                        fontSize: 18,
                        borderRadius: 2,
                        "&:hover": {
                          backgroundColor: "#f0f6fc",
                          transition: "background-color 0.3s ease",
                        },
                      }}
                    >
                      Start a free trial
                      <KeyboardArrowRightIcon />
                    </Button>
                  </CardActions>
                  <Typography
                    textAlign="center"
                    variant="body1"
                    color="#676b7d"
                    fontWeight={500}
                  >
                    Free for verified students, teachers, and maintainers of
                    popular open source projects.
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card
                  sx={{
                    height: "100%",
                    padding: 3,
                    border: "0.5px solid #ffffff1e",
                    borderRadius: "20px",
                    backgroundColor: "#251a57",
                  }}
                >
                  <CardContent sx={{ textAlign: "center" }}>
                    <Typography
                      gutterBottom
                      variant="h4"
                      sx={{ fontWeight: 600, color: "white" }}
                      component="div"
                    >
                      Copilot Individual
                    </Typography>
                    <Typography
                      variant="body2"
                      color="#676b7d"
                      fontWeight={500}
                    >
                      For individual developers, freelancers, students, and
                      educators that want to code faster and happier.
                    </Typography>
                  </CardContent>
                  <CardContent sx={{ textAlign: "center", marginTop: 1 }}>
                    <Typography
                      gutterBottom
                      variant="h3"
                      sx={{ fontWeight: 500, color: "white" }}
                      component="div"
                    >
                      $ 10 USD
                    </Typography>
                    <Typography
                      sx={{ margonBottom: 0 }}
                      variant="body2"
                      color="#676b7d"
                      fontWeight={500}
                    >
                      per month / $100 USD per year
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      sx={{
                        backgroundColor: "white",
                        width: "100%",
                        fontWeight: "550",
                        paddingY: 1,
                        fontSize: 18,
                        borderRadius: 2,
                        "&:hover": {
                          backgroundColor: "#f0f6fc",
                          transition: "background-color 0.3s ease",
                        },
                      }}
                    >
                      Start a free trial
                      <KeyboardArrowRightIcon />
                    </Button>
                  </CardActions>
                  <Typography
                    textAlign="center"
                    variant="body1"
                    color="#676b7d"
                    fontWeight={500}
                  >
                    Free for verified students, teachers, and maintainers of
                    popular open source projects.
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card
                  sx={{
                    height: "100%",
                    padding: 3,
                    border: "0.5px solid #ffffff1e",
                    borderRadius: "20px",
                    backgroundColor: "#251a57",
                  }}
                >
                  <CardContent sx={{ textAlign: "center" }}>
                    <Typography
                      gutterBottom
                      variant="h4"
                      sx={{ fontWeight: 600, color: "white" }}
                      component="div"
                    >
                      Copilot Individual
                    </Typography>
                    <Typography
                      variant="body2"
                      color="#676b7d"
                      fontWeight={500}
                    >
                      For individual developers, freelancers, students, and
                      educators that want to code faster and happier.
                    </Typography>
                  </CardContent>
                  <CardContent sx={{ textAlign: "center", marginTop: 1 }}>
                    <Typography
                      gutterBottom
                      variant="h3"
                      sx={{ fontWeight: 500, color: "white" }}
                      component="div"
                    >
                      $ 10 USD
                    </Typography>
                    <Typography
                      sx={{ margonBottom: 0 }}
                      variant="body2"
                      color="#676b7d"
                      fontWeight={500}
                    >
                      per month / $100 USD per year
                    </Typography>
                  </CardContent>
                  <CardActions
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 3,
                    }}
                  >
                    <Box width="100%">
                      <Button
                        sx={{
                          backgroundColor: "white",
                          width: "100%",
                          fontWeight: "550",
                          paddingY: 1,
                          fontSize: 18,
                          borderRadius: 2,
                          "&:hover": {
                            backgroundColor: "#f0f6fc",
                            transition: "background-color 0.3s ease",
                          },
                        }}
                      >
                        Start a free trial
                        <KeyboardArrowRightIcon />
                      </Button>
                    </Box>
                    <Box width="100%">
                      <Button
                        sx={{
                          color: "white",
                          width: "100%",
                          fontWeight: "550",
                          paddingY: 1,
                          margin: 0,
                          fontSize: 18,
                          borderRadius: 2,
                          border: "1.5px solid #ffffff45",
                          "&:hover": {
                            backgroundColor: "#f0f6fc21",
                            border: "1.5px solid #ffffff",
                            transition: "background-color 0.3s ease",
                          },
                        }}
                      >
                        Contact sale
                        <KeyboardArrowRightIcon />
                      </Button>
                    </Box>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Box>
          <Container sx={{ paddingBottom: 10 }} maxWidth="xl">
            <TableList />
          </Container>
        </Box>
        <Footer />
      </Container>
    </>
  );
}
