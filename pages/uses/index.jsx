import React from "react";
import Layout from "../../components/layouts/default";
import { LabelCustom } from "../../components/atoms/Label/Label.style";
import Container from "../../components/containers/Container";
import { BLACK_THEME } from "../../theme/theme";
import usesImg from "../../public/static/images/uses.jpg";
const Uses = React.memo(props => {
  return (
    <Layout>
      <Container clssName="uses">
        <Container clssName="container-uses">
          <LabelCustom
            fontWeight={900}
            fontSize="40px"
            colors={BLACK_THEME}
            marginBot="30px"
          >
            What i uses ?
          </LabelCustom>
          <img className="uses-image" src={usesImg} alt="uses" />
        </Container>
        <Container clssName="container-uses">
          <LabelCustom fontWeight={600} fontSize="30px">
            #Editor
            <ul>
              <li>
                <a href="https://code.visualstudio.com/" target="_blank">
                  vscode
                </a>
                <br />
                When working we should use IDE or text editor family with our
                teammate,
                <br /> so we can make sure every one in team work together more
                easily, for that reason i chose vscode for my main text editor
                in office
              </li>
              <li>
                <a>Vim</a> <br />
                Vim is one of the most efficiently text editor i ever use,{" "}
                <br />
                i'm using neovim as my main text editor in my home, <br />
                you can find my config{" "}
                <a
                  href="https://github.com/DaoHuyTuan/dotfiles/blob/master/vim/init.vim"
                  target="_blank"
                >
                  here
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/pensnarik/consolas-font"
                  target="_blank"
                >
                  Font Consolas
                </a>
                <br />
                font for every my text editor
              </li>
              <li>
                <a href="https://iterm2.com/" target="_blank">
                  Iterm2{" & "}
                  Oh-my-zsh
                </a>
                <br />
                My terminal running with{" "}
                <a href="https://ohmyz.sh/" target="_blank">
                  Oh-my-zsh
                </a>
              </li>
              <li>
                <a href="https://github.com/tmux/tmux" target="_blank">
                  Tmux
                </a>
                <br />
                tmux is a terminal multiplexer, i use tmux with vim to manager
                my panel{" "}
                <a href="https://github.com/DaoHuyTuan/dotfiles/blob/master/tmux/.tmux.conf">
                  (config)
                </a>
              </li>
            </ul>
          </LabelCustom>

          <LabelCustom fontWeight={600} fontSize="30px">
            #Themes
            <ul>
              <li>
                <a
                  href="https://marketplace.visualstudio.com/items?itemName=akamud.vscode-theme-onedark"
                  target="_blank"
                >
                  Atom One Dark
                </a>
                <br />
                Theme i'm using in vscode
              </li>
            </ul>
          </LabelCustom>

          <LabelCustom fontWeight={600} fontSize="30px">
            #Software
            <ul>
              <li>
                <a href="https://tableplus.com/" target="_blank">
                  TablePlus
                </a>
                <br />
                Database management software for macos
              </li>
              <li>
                <a href="https://slack.com/" target="_blank">
                  Slack
                </a>
                <br />
                Communicate software for team
              </li>
              <li>
                <a href="https://www.google.com/chrome/" target="_blank">
                  Chrome
                </a>
                <br />
                My favourite browser for both work or relax
              </li>
              <li>
                <a href="https://www.sourcetreeapp.com/" target="_blank">
                  Sourcetree
                </a>
                <br />
                Free beautifull git GUI in macos and window
              </li>
              <li>
                <a
                  href="https://www.adobe.com/products/photoshop.html"
                  target="_blank"
                >
                  Adobe Photoshop
                </a>
                <br />
                Software i use for optimize image, resize or anything i need to
                edit image
              </li>
              <li>
                <a href="https://www.spotify.com/" target="_blank">
                  Spotify
                </a>
                <br />
                Every one need music, spotify bring many category music into my
                life
              </li>
              <li>
                <a href="https://www.notion.so/" target="_blank">
                  Notion
                </a>
                <br />
                Save some thing inspire me, document or something importal
              </li>
            </ul>
          </LabelCustom>
          <LabelCustom fontWeight={600} fontSize="30px">
            #Hardware
            <ul>
              <li>Apple iMac 2017, 27 inch (16GB RAM, Macos Catalina)</li>
              <li>Laptop HP (8GB RAM, window 10)</li>
              <li>Magic mouse</li>
              <li>Vortex Cypher Single Spacebar (red switch)</li>
              <li>Iphone 5C ( T.T ) </li>
            </ul>
          </LabelCustom>
        </Container>
      </Container>
    </Layout>
  );
});

export default Uses;
