/**
 * A typical page in the app
 */
export class Page {
  /**
   * Name of the view
   */
  public view: string;
  /**
   * Index of the current view (for pagination)
   */
  public index: number;

  /**
   * The progress of the currentPage
   */
  public progress: number;

  /**
   * The displayed breadcrumbs
   */
  public breadcrumbs: string[];
}
