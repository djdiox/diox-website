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
  public currenTools = this.createTools();

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

  /**
   * Creates the tools of the type
   */
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
  private filterTools(type: string) {
    return this.state.data.technology.tools
      .filter(tool => tool.type === type);
  }

  /**
   * Opens a given website by parameters
   * @param website a fully qualified URL String
   */
  public openUrl(website: string) {
    window.open(website);
  }

  /**
   * Searches all the chips by a given string
   * @param search
   */
  public searchTools(search: string) {
    this.currenTools = this.allTools.reduce((finalValue, current) => {
      current = JSON.parse(JSON.stringify(current));
      current.tools = current.tools.filter((tool) => JSON.stringify(tool).toLowerCase().indexOf(search.toLowerCase()) !== -1);
      return current.tools.length !== 0 ? [...finalValue, current] : finalValue;
    }, []);
  }
}
