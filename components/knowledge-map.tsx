"use client";

import { useState } from "react";
import { ChevronRight, Network } from "lucide-react";
import { interests } from "../data/portfolio";

export function KnowledgeMap() {
  const [activeTopic, setActiveTopic] = useState(interests[0].id);
  const selectedTopic = interests.find((topic) => topic.id === activeTopic) ?? interests[0];
  return (
    <section className="map-section section-grid" id="map">
      <div className="section-aside"><span className="section-number">02 / KNOWLEDGE MAP</span><span className="aside-rule" /><span className="aside-note">Areas of interest,<br />connected by ideas.</span></div>
      <div className="section-main">
        <div className="section-heading-row"><div><p className="section-kicker">THE ENGINEERING KNOWLEDGE MAP</p><h2>Follow the <em>connections.</em></h2></div><span className="map-count">05 AREAS / OPEN ENDED</span></div>
        <p className="section-description">Topics I'm exploring and the concepts I want to understand better. These are learning areas, not claims of expertise.</p>
        <div className="knowledge-layout">
          <div className="map-canvas" aria-label="Select an area to explore related concepts">
            <svg className="map-lines" viewBox="0 0 700 410" preserveAspectRatio="none" aria-hidden="true"><path d="M120 95 L345 55 L570 115 M120 95 L190 315 L500 325 L570 115 M345 55 L500 325" /><circle cx="345" cy="55" r="3" /><circle cx="190" cy="315" r="3" /><circle cx="500" cy="325" r="3" /></svg>
            {interests.map((topic, index) => <button key={topic.id} className={"map-node node-" + topic.id + (activeTopic === topic.id ? " is-active" : "")} onClick={() => setActiveTopic(topic.id)} aria-pressed={activeTopic === topic.id}><span className="node-index">0{index + 1}</span><span className="node-name">{topic.short}</span><span className="node-state">{topic.status}</span></button>)}
            <div className="map-center"><Network size={18} aria-hidden="true" /><span>COMPUTING</span></div>
            <span className="map-axis axis-x">CONCEPTS →</span><span className="map-axis axis-y">EXPLORATION ↑</span>
          </div>
          <article className="topic-detail" aria-live="polite"><div className="detail-top"><span>SELECTED AREA / {selectedTopic.id.toUpperCase()}</span><span className="detail-pulse" /></div><p className="detail-label">AREA OF INTEREST</p><h3>{selectedTopic.name}</h3><span className="topic-status">{selectedTopic.status}</span><p className="topic-description">{selectedTopic.description}</p><div className="concept-list"><span className="detail-label">RELATED CONCEPTS</span>{selectedTopic.concepts.map((concept) => <span className="concept-chip" key={concept}>{concept}</span>)}</div><div className="detail-foot"><span>LEARNING NOTES</span><ChevronRight size={15} aria-hidden="true" /></div></article>
        </div>
      </div>
    </section>
  );
}
