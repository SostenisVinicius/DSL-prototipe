import { demoComponents } from '@dsl/design-system-registry';
export default function DesignSystems(){return <main><h1>Design Systems</h1><div className="card"><h2>Demo DS 1.0.0</h2><p>{demoComponents.length} componentes cadastrados.</p><ul>{demoComponents.map(c=><li key={c.id}>{c.selector} — {c.status}</li>)}</ul></div></main>}
