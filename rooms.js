// ============================================================
//  rooms.js — 房間設定檔（唯一需要維護的地方）
//  修改這裡，index.html 和 qr-generator.html 都會自動更新
// ============================================================

const ROOMS = [
  { code: "ward-301",    name: "病房 301" },
  { code: "ward-302",    name: "病房 302" },
  { code: "ward-303",    name: "病房 303" },
  { code: "clinic-a",    name: "診間 A" },
  { code: "clinic-b",    name: "診間 B" },
  { code: "toilet-1f",   name: "廁所 1F" },
  { code: "toilet-2f",   name: "廁所 2F" },
  { code: "waiting-a",   name: "待診區 A" },
  { code: "exam-room-1", name: "檢查室 1" },
  { code: "exam-room-2", name: "檢查室 2" },
  // 新增房間：照格式往下加就好
  // { code: "ward-304", name: "病房 304" },
];
