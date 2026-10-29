/* Application fields and sample data. MIT License. */
const SPEC={
  "id": "B02",
  "slug": "service-menu",
  "name": "服务套餐制作工具",
  "desc": "整理服务价格、交付内容、周期和修改次数，生成可分享的套餐页。",
  "fields": [
    {
      "key": "brand",
      "label": "个人工作室/称呼",
      "type": "text",
      "value": "示例独立创作者"
    },
    {
      "key": "contact",
      "label": "联系方式（自行填写）",
      "type": "text",
      "value": "请填写自己的联系方式"
    },
    {
      "key": "terms",
      "label": "共同说明",
      "type": "textarea",
      "value": "客户提供已确认文案和可用素材；新增需求单独确认。"
    }
  ],
  "tables": [
    {
      "key": "items",
      "label": "服务套餐",
      "columns": [
        {
          "key": "name",
          "label": "套餐名",
          "type": "text"
        },
        {
          "key": "price",
          "label": "价格（元）",
          "type": "number"
        },
        {
          "key": "days",
          "label": "交付工作日",
          "type": "number"
        },
        {
          "key": "revisions",
          "label": "修改轮数",
          "type": "number"
        },
        {
          "key": "deliverables",
          "label": "交付内容",
          "type": "textarea"
        }
      ],
      "rows": [
        {
          "name": "基础图文包",
          "price": 800,
          "days": 3,
          "revisions": 1,
          "deliverables": "1张主图＋2张卖点图"
        },
        {
          "name": "标准图文包",
          "price": 1500,
          "days": 5,
          "revisions": 2,
          "deliverables": "1张主图＋5张卖点图＋源文件"
        }
      ]
    }
  ],
  "skill": true,
  "dirname": "service-menu",
  "example": {
    "_files": {},
    "brand": "示例独立创作者",
    "contact": "请填写自己的联系方式",
    "terms": "客户提供已确认文案和可用素材；新增需求单独确认。",
    "items": [
      {
        "name": "基础图文包",
        "price": 800,
        "days": 3,
        "revisions": 1,
        "deliverables": "1张主图＋2张卖点图"
      },
      {
        "name": "标准图文包",
        "price": 1500,
        "days": 5,
        "revisions": 2,
        "deliverables": "1张主图＋5张卖点图＋源文件"
      }
    ]
  },
  "inputTitle": "套餐设置",
  "outputTitle": "套餐预览",
  "action": "生成套餐页"
};
