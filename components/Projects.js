import Reveal from "./Reveal";
import {projects} from "../data/portfolio";

function LumierePreview(){
  return <div className="lumierePreview" aria-hidden="true">
    <div className="lumiereBrowser">
      <div className="lumiereTop"><span>LUMIÈRE</span><span>Tratamientos&nbsp;&nbsp;&nbsp; Estudio&nbsp;&nbsp;&nbsp; Reservar ↗</span></div>
      <div className="lumiereScreen">
        <div className="lumiereCopy"><small>ESTUDIO DE PIEL · BUENOS AIRES</small><strong>Tu piel no necesita<br/>doce pasos.</strong><span>Primero necesitamos verla.</span></div>
        <div className="lumiereArt"><i/><b/><em>LUMIÈRE</em></div>
      </div>
    </div>
  </div>
}

export default function Projects(){
  return <section className="section shell" id="work">
    <Reveal><header><span>01 / PROYECTOS</span><h2>Proyectos seleccionados.</h2></header></Reveal>
    <div className="projects">
      {projects.map((p,i)=><Reveal key={p.n} delay={i*.06}>
        {p.featured ? <article className="featuredProject">
          <div className="featuredMeta"><b>{p.n}</b><small>{p.kind}</small><span>{p.status}</span></div>
          <a className="previewLink" href={p.liveUrl} target="_blank" rel="noreferrer" aria-label="Abrir sitio Lumière"><LumierePreview/></a>
          <div className="featuredInfo">
            <div><h3>{p.title}</h3><p>{p.text}</p><div className="chips">{p.stack.map(x=><span key={x}>{x}</span>)}</div></div>
            <div className="projectLinks"><a className="projectAction live" href={p.liveUrl} target="_blank" rel="noreferrer">Ver sitio <span>↗</span></a><span className="caseSoon">Caso de estudio · próximamente</span></div>
          </div>
        </article> : <article className={"project "+p.tone}><b>{p.n}</b><div><small>{p.kind}</small><h3>{p.title}</h3><p>{p.text}</p><div className="chips">{p.stack.map(x=><span key={x}>{x}</span>)}</div></div><aside><span>{p.status}</span><button className="projectAction" disabled>Ver proyecto · pronto</button></aside></article>}
      </Reveal>)}
    </div>
  </section>
}
