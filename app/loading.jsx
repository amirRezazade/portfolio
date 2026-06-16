import "./loading.css";
export default function loading(params) {
  return (
    <div id="loader" class="centered fixed top-0 left-0 size-full bg-black z-199 transition-[opacity,visibilty]">
      <div class="ai-matrix-loader">
        <div class="digit">0</div>
        <div class="digit">1</div>
        <div class="digit">0</div>
        <div class="digit">1</div>
        <div class="digit">1</div>
        <div class="digit">0</div>
        <div class="digit">0</div>
        <div class="digit">1</div>
        <div class="digit">1</div>
        <div class="glow"></div>
      </div>
    </div>
  );
}
