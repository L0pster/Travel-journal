import './App.css';
import Nav from "./parts/nav-bar"
import Bars from "./parts/bars"
export default function App() {
  return (
    <div className="App">
        <Nav />
        <div className="cards">
        <Bars 
          link="https://en.wikipedia.org/wiki/Italy"
          img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.fontica.com%2Fwp-content%2Fuploads%2F2020%2F04%2FVenice-Italy-Image-683x1024.jpg&f=1&nofb=1&ipt=4888a473c96db46655bccf1a43a753b2824f303836d8959292caf55bc7c9b06e&ipo=images"
          Name="Italy"
          desc="Capital Rome
          covering an area of 301,340 km2 
          Official languages	Italiana"
          />          
        <Bars 
          link="https://en.wikipedia.org/wiki/Montenegro"
          img="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.aviastar.org%2Ftravel%2Fcrnagora%2Fcrnagora%2Fcrnagora_26.jpg&f=1&nofb=1&ipt=a31085bf13fdc4cf243eb2a0096b5ebe15187d414e43c0e6f995a43954c0efc0&ipo=images"
          Name="Montenegro"
          desc="Capital Podgorica
          territory of 13,812 square kilometres 
          The official language in Montenegro is Montenegrin. Serbian, Bosnian, Albanian, and Croatian
          "/>
        <Bars 
          link="https://en.wikipedia.org/wiki/Poland"
          img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpreview.redd.it%2F90ejkwz53mz71.jpg%3Fwidth%3D1960%26format%3Dpjpg%26auto%3Dwebp%26s%3D02bde89845c421fa80cb7f3b35465ec5168c07a6&f=1&nofb=1&ipt=032f64041e6ad06c30c93d9ad46bf20a8838fd074c6aaa8f385c123744f05207&ipo=images"
          Name="Poland"
          desc="Capital Warsaw
          covering a combined area of 312,696 km2
          Official language	Polish
          "
        />
        <Bars 
          link="https://en.wikipedia.org/wiki/North_Macedonia"
          img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.squarespace-cdn.com%2Fcontent%2Fv1%2F573ed2458259b5f9e4526bd7%2F1567766371364-WV0RN0S3IV6H7GJ9S2TW%2Fke17ZwdGBToddI8pDm48kHH9S2ID7_bpupQnTdrPcoF7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0nQwvinDXPV4EYh2MRzm-RRB5rUELEv7EY2n0AZOrEupxpSyqbqKSgmzcCPWV5WMiQ%2FMacedonia%2BSquare%2BSkopje&f=1&nofb=1&ipt=f8a91180741bf18fdae9da64575d71f0929399e96049b1651667f21e3e3775b5&ipo=images"
          Name="Macedonia"
          desc="Capital Sjopje
          North Macedonia has a total area of 25,436 km2.
          Official languages Macedonian Albanian
          "
        />
        <Bars 
          link="https://fi.wikipedia.org/wiki/Albania"
          img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbeblissfultravel.com%2Fwp-content%2Fuploads%2F2022%2F08%2Fbeautiful-places-in-albania-1024x1024.png&f=1&nofb=1&ipt=66e378e227adc2f0424aa870b8b0ee0302cb6f311dadbdcff55dd1865f8b0da7&ipo=images"
          Name="Albania"
          desc="Capital Tirana
          Spanning an area of 28,748 km2
          Official languages	Albanian
          "
        />
        </div>
    </div>
  );
}

