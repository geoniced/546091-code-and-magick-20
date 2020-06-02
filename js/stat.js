'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;

var GAP_X = 50;
var GAP_Y = 10;

var FONT_GAP = 15;
var GIST_START_Y = CLOUD_Y + (GAP_Y + FONT_GAP) * 2 + GAP_Y;

var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var PLAYER_COLOR = 'rgba(255, 0, 0, 1)';


var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

var getPlayerColor = function (player) {
  return player === 'Вы' ? PLAYER_COLOR : 'hsl(220, ' + Math.round(Math.random() * 100) + '%, 50%)';
};

var renderStatisticsWinText = function (ctx) {
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP_Y, CLOUD_Y + GAP_Y + FONT_GAP);
  ctx.fillText('Список результатов:', CLOUD_X + GAP_Y, CLOUD_Y + (GAP_Y + FONT_GAP) * 2);
};

var renderScore = function (ctx, item, time, offset) {
  ctx.fillText(Math.round(time), CLOUD_X + GAP_X + (BAR_WIDTH + GAP_X) * item, GIST_START_Y + offset + FONT_GAP);
};

var renderName = function (ctx, item, playerName) {
  ctx.fillText(playerName, CLOUD_X + GAP_X + (BAR_WIDTH + GAP_X) * item, GIST_START_Y + FONT_GAP + GAP_Y + BAR_HEIGHT + GAP_Y + FONT_GAP);
};

var renderBar = function (ctx, item, player, height, offset) {
  ctx.fillStyle = getPlayerColor(player);
  ctx.fillRect(CLOUD_X + GAP_X + (BAR_WIDTH + GAP_X) * item, GIST_START_Y + FONT_GAP + GAP_Y + offset, BAR_WIDTH, height);
  ctx.fillStyle = '#000';
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP_Y, CLOUD_Y + GAP_Y, 'rgba(0, 0, 0, 0.3)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';

  var maxTime = getMaxElement(times);

  ctx.font = '16px PT Mono';

  renderStatisticsWinText(ctx);

  for (var i = 0; i < players.length; i++) {
    var currentHeight = (BAR_HEIGHT * times[i]) / maxTime;
    var gistStartOffsetY = BAR_HEIGHT - currentHeight;

    renderScore(ctx, i, times[i], gistStartOffsetY);
    renderName(ctx, i, players[i]);
    renderBar(ctx, i, players[i], currentHeight, gistStartOffsetY);
  }
};
