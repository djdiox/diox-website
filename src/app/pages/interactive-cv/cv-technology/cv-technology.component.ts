import {Component, OnInit} from '@angular/core';
import {DEFAULT_STATE} from '../_presets/cv-default-state';
import {ToolType, Types} from '../_presets/tool-type';

@Component({
  selector: 'app-cv-technology',
  templateUrl: './cv-technology.component.html',
  styleUrls: ['./cv-technology.component.scss']
})
/**
 * Controller for the CV (Technology) Page
 */
export class CvTechnologyComponent implements OnInit {

  /**
   * Current State of the CV
   * (Deep cloned)
   * @type Object
   */
  public state = {...DEFAULT_STATE};

  /**
   * All tools available fo the CV
   * @type {Array}
   */
  public allTools = this.createTools();

  /**
   * Represents all types of tools in the cv
   * @type {string[]}
   */
  public currenTools = Object.assign([], this.allTools);

  /**
   * A search for the technologies
   */
  public searchText = '';

  /**
   * Class Initialization
   */
  constructor() {
  }

  /**
   * Angular Component Initialization Method
   */
  ngOnInit() {
  }

  private createTools() {
    return Types.reduce((initial, type) => [...initial, {
        name: type,
        tools: this.filterTools(type)
      }]
      , []);
  }

  /**
   * Filters all the given toolTypes by the Type
   * @param type the tipe that filters the array
   * @returns {any[]} The array of tools
   */
  private filterTools(type: ToolType) {
    return this.state.data.technology.tools
      .filter(tool => tool.type === type);
  }

  /**
   * Opens a given website by parameters
   * @param website a fully qualified URL String
   */
  openUrl(website: string) {
    window.open(website);
  }

  /**
   * Searches all the chips by a given string
   * @param search
   */
  public searchTools(search: string) {
    //TODO refactor this
    this.allTools = this.createTools();
    this.currenTools = this.allTools.map(toolType => {
      toolType.tools = toolType.tools.filter(tool => JSON.stringify(tool).indexOf(search.toLowerCase()) !== -1);
      return toolType;
    })
      .filter(current => current.tools.length !== 0);
    // this.createTools();
    console.log(this.toolTypes);
  }
}
