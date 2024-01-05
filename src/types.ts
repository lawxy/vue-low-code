export type TMode = 'design' | 'form';
export interface IEditorCanvasProp {
  /**
   * 表单模式
   */
  mode: TMode;
}
export type TOptions = { label: string; value: string | number; };
export type TDirection = 'vertical' | 'horizontal';
export interface IBaseElement {
  /**
   * 链表形式存储父节点, 暂时没用
   */
  parentEelemnt?: IBaseElement;
  /**
   * 元素类型
   */
  type?: string;
  /**
   * 元素名称（标签名称）
   */
  elementName?: string;
  /**
   * 元素名称（标签名称）对齐方式
   */
  elementNameDisplay?: TDirection;
  /**
   * 元素id
   */
  id?: string;
  /**
   * 元素栅格
   */
  // widthPercent?: number;
  gridSpan?: number;
  /**
   * 日期元素格式
   */
  dateFormat?: string;
  /**
   * 文本类型
   */
  textType?: 'single' | 'multiple';
  /**
   * 多行是否自适应
  */
  autoSize?: boolean;
  /**
   * 最小行数
   */
  minRows?: number;
  /**
   * 最大行数
   */
  maxRows?: number;
  /**
   * 最小值
   */
  minVal?: number;
  /**
   * 最大值
   */
  maxVal?: number;
  /**
   * 数据类型
  */
  valueType?: 'int' | 'one_decimal' | 'two_decimal';
  /**
   * 选项
  */
  valueOptions?: TOptions[];
}

export type TMenuBaseItem = Pick<IBaseElement, 'type' | 'elementName'>