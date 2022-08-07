import LiteGraphSettings from 'litegraph.js';

// LiteGraphSettings.LiteGraph.debug = false;
LiteGraphSettings.LiteGraph.allow_multi_output_for_events = false;
LiteGraphSettings.LiteGraph.node_box_coloured_by_mode = true;
// LiteGraphSettings.LiteGraph.node_box_coloured_when_on = true;
LiteGraphSettings.LiteGraph.alt_drag_do_clone_nodes = true;
LiteGraphSettings.LiteGraph.release_link_on_empty_shows_menu = true;

LiteGraphSettings.LiteGraph.clearRegisteredTypes();

LiteGraphSettings.LiteGraph.NODE_TITLE_COLOR = '#000';
LiteGraphSettings.LiteGraph.NODE_SELECTED_TITLE_COLOR = '#000';
LiteGraphSettings.LiteGraph.NODE_DEFAULT_COLOR = '#fff';
LiteGraphSettings.LiteGraph.NODE_DEFAULT_BGCOLOR = '#000';
LiteGraphSettings.LiteGraph.NODE_TEXT_COLOR = '#fff';
LiteGraphSettings.LiteGraph.NODE_DEFAULT_BOXCOLOR = '#000';

// LiteGraphSettings.LiteGraph.LINK_COLOR = '#96b4f2';
// LiteGraphSettings.LiteGraph.CONNECTING_LINK_COLOR = '#929aa8';

// ["Always", "On Event", "Never", "On Trigger"]
LiteGraphSettings.LiteGraph.NODE_MODES_COLORS = ["#fff","#aa8866","#000","#77ff77","red"];
// LiteGraphSettings.LiteGraph.LGraphCanvas.render_shadows = false;

export const LiteGraph = LiteGraphSettings.LiteGraph;