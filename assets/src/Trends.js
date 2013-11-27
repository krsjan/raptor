(function (window, $, nv) {

  window.RAPTOR = window.RAPTOR || {};
  var ns = window.RAPTOR;

  ns.Trends = function () {
    var self = this;

    this.parseTrend = function parseTrend (data, ids) { 
      _.each(ids, function(id) {
        self.drawTrend(data, id);
      });
    }

    self.drawTrend = function drawTrend (data, id) {
      var rows = data.rows,
          names = data.metaData.names,
          plotData = [{
          "key" : "some key",
          "values" : []
          }];

      $("#trends").append("<h2>" + data.metaData.names[id] + "<h2>");
      $("#trends").append('<div id=' + id + '><svg></svg></div>');

      _.each(rows, function(row) {
        if (id === row[0]) {
          plotData[0].values.push({ "label" : names[row[1]],
          "value" : parseFloat(row[2])});
        }
      });

      nv.addGraph(function () {
        var chart = nv.models.lineChart();
		
		chart.xAxis
        .axisLabel('Time')
        .tickFormat(d3.format(',r'));
 
		chart.yAxis       
		.axisLabel(id)
		.tickFormat(d3.format('.02f'));

        chart.xAxis.rotateLabels(-45);

        d3.select("#" + id + " svg")
          .datum(plotData)
          .transition().duration(500)
          .call(chart);
        
        nv.utils.windowResize(chart.update);
        return chart;
      });

    };

  };

}(window, jQuery, nv));